require('dotenv').config()

const { env: { PORT = 8080, NODE_ENV: env }, argv: [, , port = PORT] } = process

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const winston = require('winston')
const morgan = require('morgan')
const { name, version } = require('./package')
const { graphqlHTTP } = require('express-graphql');
const { CardsSchema, schema } = require('./Schemas/Card.ts')

const app = express()
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'server.log' })
    ]
})

if (env !== 'pro') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }))
}

const jsonBodyParser = bodyParser.json()

app.use(morgan('combined', { stream: accessLogStream }))

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));
  
app.listen(port, () => logger.info(`server ${name} ${version} up and running on port ${port}`))

process.on('SIGINT', () => {
    logger.info('server abruptly stopped')

    process.exit(0)
})
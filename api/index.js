require('dotenv').config()

const { env: { PORT = 8080, NODE_ENV: env, MONGODB_URL }, argv: [, , port = PORT] } = process

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const winston = require('winston')
const morgan = require('morgan')
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const { name, version } = require('./package.json')
const { CardsSchema } = require('./src/cards')

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
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

  app.use(morgan('combined', { stream: accessLogStream }))

  app.use(cors())

  app.use('/graphql', graphqlHTTP({
    schema: CardsSchema
  }))

  app.listen(port, () => logger.info(`server ${name} ${version} up and running on port ${port}`))

  process.on('SIGINT', () => {
    logger.info('server abruptly stopped')

    process.exit(0)
  })
})

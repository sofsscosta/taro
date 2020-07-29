const { GraphQLSchema } = require ('graphql');
const { queryType } = require('./query')
const { mutationType } = require('./mutation')
const { cardType } = require('./types')

const CardsSchema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
    types: [cardType]
  });
  
module.exports = { CardsSchema } 
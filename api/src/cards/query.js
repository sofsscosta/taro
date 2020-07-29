const { models: { Card } } = require('data')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = require ('graphql');
const { cardType } = require('./typeDefs')
const { getCard, getCards } = require('./resolvers')

const queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    card: {
      type: cardType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(_, args) {
        return await Card.findById(args.id);
      }
    },
    cards:{
      type: new GraphQLList(cardType),
      async resolve() {
        return await Card.find({});
      }
  }
  })
});

module.exports = { queryType }
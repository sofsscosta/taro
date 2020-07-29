const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')
const { cardType } = require('./types')
const { getCard, getCards } = require('./resolvers')

const queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    card: {
      type: cardType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLString)
        }
      },
      resolve (_, args) {
        return getCard(args.id)
      }
    },
    cards: {
      type: new GraphQLList(cardType),
      resolve () {
        return getCards()
      }
    }
  })
})

module.exports = { queryType }

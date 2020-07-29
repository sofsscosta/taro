const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')

const { cardInputType, cardType } = require('./types')
const { createCard, createCards } = require('./resolvers')

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createCard: {
      type: cardType,
      args: {
        input: {
          type: new GraphQLNonNull(cardInputType)
        }
      },
      async resolve (_, args) {
        const { name, suite, image, description, interpretation } = args.input
        return createCard(name, suite, image, description, interpretation)
      }
    },
    createCards: {
      type: GraphQLList(cardType),
      args: {
        input: {
          type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(cardInputType)))
        }
      },
      async resolve (_, args) {
        return createCards(args.input)
      }
    }
  }
})

module.exports = { mutationType }

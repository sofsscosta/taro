const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType
} = require('graphql')

const cardInputType = new GraphQLInputObjectType({
  name: 'CardInputType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    suite: { type: GraphQLString },
    image: { type: GraphQLString },
    description: { type: GraphQLString },
    interpretation: { type: GraphQLString }
  })
})

const cardType = new GraphQLObjectType({
  name: 'CardType',
  fields: () => cardInputType.getFields()
})

module.exports = { cardInputType, cardType }

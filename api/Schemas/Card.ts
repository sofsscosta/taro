const Card = require('../models/card')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLID,
  GraphQLInputObjectType
} = require ('graphql');

const { Schema, Types: { ObjectId } } = require('mongoose')

// const suiteEnum = new GraphQLEnumType({
//   name: 'Suite',
//   values: {
//     MAJOR_ARCANA: {
//       type: GraphQLString,
//       description: 'The most meaningful cards. Usually come up on moments of big life changes.',
//     },
//     WANDS: {
//       type: GraphQLString,
//       description: 'Connected to Fire energy. About action, conquering and passion.',
//     },
//     PENTACLES: {
//       type: GraphQLString,
//       description: 'Connected to Earth energy. About security, money and home.',
//     },
//     SWORDS: {
//       type: GraphQLString,
//       description: 'Connected to Air energy. About communication, change and painful events.',
//     },
//     CUPS: {
//       type: GraphQLString,
//       description: 'Connected to Water energy. About love, caring and dreaming.',
//     },
//   },
// });

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
});

const cardType = new GraphQLObjectType({
  name: 'CardType',
  fields: () => cardInputType.getFields()
});

const queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    card: {
      type: cardType,
      args: {
        id: {
          description: 'id of the card',
          type: GraphQLNonNull(GraphQLString),
          resolve(_, args) {
            return Card.findById(args.id);
        }
        },
      }
    },
    cards:{
      type: new GraphQLList(cardType),
      async resolve() {
          return await Card.find({});
      }
  },
  })
});

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
      async resolve(_, args){
        const { name, suite, image, description, interpretation } = args.input
          let card = new Card({
              name: name,
              suite: suite,
              image: image,
              description: description,
              interpretation: interpretation
          })
          return await card.save()
      }
    },
    createCards: {
      type: GraphQLList(cardType),
      args: { 
        input: {
          type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(cardInputType))),
        }
      },
      async resolve(_, args){
        const processedArgs = args.input
        
        processedArgs.map(arg => {
          const card = new Card({
              name: arg.name,
              suite: arg.suite,
              image: arg.image,
              description: arg.description,
              interpretation: arg.interpretation
          })
          return JSON.stringify(card)
        })
        await Card.insertMany(processedArgs)
        return await Card.find({})
      }
    },
  }
})

const CardsSchema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
  types: [cardType]
});

module.exports = { CardsSchema } 
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLInterfaceType,
  buildSchema
} = require ('graphql');
const Card = require('../models/card')

const suiteEnum = new GraphQLEnumType({
  name: 'Suite',
  values: {
    MAJOR_ARCANA: {
      type: GraphQLString,
      description: 'The most meaningful cards. Usually come up on moments of big life changes.',
    },
    WANDS: {
      type: GraphQLString,
      description: 'Connected to Fire energy. About action, conquering and passion.',
    },
    PENTACLES: {
      type: GraphQLString,
      description: 'Connected to Earth energy. About security, money and home.',
    },
    SWORDS: {
      type: GraphQLString,
      description: 'Connected to Air energy. About communication, change and painful events.',
    },
    CUPS: {
      type: GraphQLString,
      description: 'Connected to Water energy. About love, caring and dreaming.',
    },
  },
});

const cardInterface = new GraphQLInterfaceType({
  name: 'Interface',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLString
    },
    suite: {
      type: GraphQLList(suiteEnum),
      description: 'If major or minor arcana, and which suite in the latter.'
    },
    image: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    interpretation: {
      type: GraphQLString
    }
  }),
  resolve() { return new cardInterface(name, suite) }
});

const cardType = new GraphQLObjectType({
  name: 'Card',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString)  },
    name: { type: GraphQLString },
    // suite: { type: GraphQLList(suiteEnum) }, 
    suite: { type: GraphQLString },   
    image: { type: GraphQLString },
    description: { type: GraphQLString },
    interpretation: { type: GraphQLString }
  }),
  // interfaces: [cardInterface],
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
      resolve() {
          return Card.find({});
      }
  },
  })
});

// class CardConstructor {
//   public name: string
//   public suite: string
//   public image: string
//   public description: string
//   public interpretation: string

//   constructor(name: string, suite: string, image: string, description: string, interpretation: string) {
//     this.name = name
//     this.suite = suite
//     this.image = image
//     this.description = description
//     this.interpretation = interpretation
//   }
// }

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createCard: {
      type: cardType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        suite: { type: new GraphQLNonNull(GraphQLString) },   
        image: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        interpretation: { type: new GraphQLNonNull(GraphQLString) }
      },
      async resolve(parent,args){
        let card = new Card({
            name: args.name,
            suite: args.suite,
            image: args.image,
            description: args.description,
            interpretation: args.interpretation
        })
        return await card.save()
      }
    },
  }
})

var schema = buildSchema(`
  input CardInput {
    id: String,
    name: String,
    suite: String,
    image: String,
    description: String,
    interpretation: String
  }

  type Card {
    id: String,
    name: String,
    suite: String,
    image: String,
    description: String,
    interpretation: String
  }

  type Query {
    getCard(id: ID!): Card
  }

  type Mutation {
    createCard(input: CardInput): Card
    updateCard(id: ID!, input: CardInput): Card
  }
`);

const CardsSchema = new GraphQLSchema({
  query: queryType,
  types: [cardType],
  mutation: mutationType
});

module.exports = { CardsSchema, schema } 
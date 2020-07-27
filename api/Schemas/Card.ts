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

const suiteEnum = new GraphQLEnumType({
  name: 'Suite',
  values: {
    MAJOR_ARCANA: {
      description: 'The most meaningful cards. Usually come up on moments of big life changes.',
    },
    WANDS: {
      description: 'Connected to Fire energy. About action, conquering and passion.',
    },
    PENTACLES: {
      description: 'Connected to Earth energy. About security, money and home.',
    },
    SWORDS: {
      description: 'Connected to Air energy. About communication, change and painful events.',
    },
    CUPS: {
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
  interfaces: [cardInterface],
});

const queryType = new GraphQLObjectType({
  name: 'getCard',
  fields: () => ({
    card: {
      type: cardType,
      args: {
        id: {
          description: 'id of the card',
          type: GraphQLNonNull(GraphQLString),
        },
      }
    }
  })
});

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
  types: [cardType]
});

module.exports = { CardsSchema, schema } 
import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    users(name: String!, id: Int): [User!]!
  }
  type User {
    name: String!
    id: Int!
  }
`;

const resolvers = {
  Query: {
    users(parent, args, context) {
      console.dir({ parent, args, context }, { depth: null });
      const a = `Welcome ${args.name}`;
      return [{ name: a, id: 1 }];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api" });

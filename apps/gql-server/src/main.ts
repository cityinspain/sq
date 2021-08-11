const express = require('express');
const cors = require('cors');
const express_graphql = require('express-graphql');
const gql = require('graphql-tag');
const ConnectionFilterPlugin = require('postgraphile-plugin-connection-filter');
const { buildASTSchema } = require('graphql');
// const { Client } = require('pg')
// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     password: "postgres",
//     database: "baseball"
// })
// const { postgraphile } = require('postgraphile');
import { postgraphile } from 'postgraphile';
const app = express();
app.use(cors());
app.use(
  postgraphile('postgres://postgres:docker@0.0.0.0:6543/baseball', 'public', {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    appendPlugins: [ConnectionFilterPlugin],
  })
);

const schema = buildASTSchema(gql`
  type Query {
    hello: String
  }
`);

const rootValue = {
  hello: () => 'Hello, world',
};

// app.use(
//   "/graphql",
//   express_graphql.graphqlHTTP({ schema, rootValue, graphiql: true })
// );

const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);

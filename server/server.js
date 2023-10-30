import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import cors from 'cors'
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!'
  }
}

var app = express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // If you need to send cookies or credentials
}))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)
const port = 4000
app.listen(port)
console.info(`Running a GraphQL API server at http://localhost:${port}/graphql`)
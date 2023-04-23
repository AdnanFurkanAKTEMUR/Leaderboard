import db from "./database/db"
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const cors = require("cors");
import schema from "./graphql/schema"
import { createClient } from 'redis';




(async function () {

  const client = createClient();
  client.on('error', err => console.log('Redis Client Error', err));
  await client.connect();

  const app = express()
  const corsOptions = {
    origin: true,
    credentials: true
  }

  app.use(cors(corsOptions))
  const apolloServer = new ApolloServer({
    schema: schema,
    context: ({ req, res }: any) => ({
      req,
      res,
      db: db,
      client: client
    })
  })

  await apolloServer.start();
  console.log("ApolloServer has started.")

  apolloServer.applyMiddleware({ app, path: "/", cors: false })
  console.log("middleware applied.")

  app.listen({ port: 4000 }, () => {
    console.log("server is ready on port 4000.")
  })
})();
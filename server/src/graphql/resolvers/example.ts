import { log } from "console";

const uuid = require('uuid');

export default {

  Query: {
    getAllExamples: async (_:any, { input }:any, { req, res, db, client }:any) => {
      await client.set('key', 'value');
      const value = await client.get('key');
      console.log("get all examples query")
      const allExs = await db('examples').select("*")
      console.log(allExs)
      console.log(value)
      return allExs
    }
  },

  Mutation: {
    deleteExample: async (_:any, { input }:any, { req, res, db, client }:any) => {
      console.log("deletwe examples mutation")
      await client.set("key","value")
      const value = await client.get("key")
      console.log(value)
      return null
    },
    generateUsers: async ( _:any, { input }:any, { req, res, db, client }:any) => {
      const jsonCont = [
        {
          key:"AL",
          value:"Albenia"
        },
        {
          key:"AZ",
          value:"Azerbaijan"
        },
        {
          key:"JP",
          value:"Japan"
        },
        {
          key:"BE",
          value:"Belgium"
        },
        {
          key:"BR",
          value:"Brasil"
        },
        {
          key:"US",
          value:"America"
        },
        {
          key:"DE",
          value:"Germany"
        },
        {
          key:"TR",
          value:"Turkey"
        },
        {
          key:"FR",
          value:"France"
        },
      ]
      for(let a = 0; a < 1000; a++){
        const myJson = {
          id:uuid.v4(), 
          user_name:`adnanfurkan__${a}`,
          rank:a+1,
          money: Math.floor(Math.random() * 1000),
          country:jsonCont[Math.floor(Math.random() * jsonCont.length)]
        }
        await db('users').insert(myJson)
        await client.set(myJson.user_name, JSON.stringify(myJson))
      }

      return "10,000,000 users created"
    }
  }

}
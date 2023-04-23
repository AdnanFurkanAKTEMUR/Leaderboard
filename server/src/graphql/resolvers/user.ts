import { knex } from "knex";

const uuid = require('uuid');

export default {

  Query: {
    getAllUsers: async (_:any, { input }:any, { req, res, db, client }:any) => {
      if(input?.query){
        const userFromRedis = await client.get(input?.query)
        const userObj = JSON.parse(userFromRedis)
        if(userObj){
          try{
            if(userObj.rank > 100){
              const first100users = await db("users").select("*").whereBetween('rank',[0, 100]).orderBy('rank');
              const aboveAndBelowUsers = await db("users").select("*").whereBetween('rank',[userObj.rank-3, userObj.rank+2]).orderBy('rank');
              const users = first100users.concat(aboveAndBelowUsers)
              return users;
            }else{
              return await db("users").select("*").whereBetween('rank',[0, 100]).orderBy('rank');
            }
          }catch(e){
            throw new Error("kullanıcı bulunamadı")
          }
        }
      }else if(input?.country){
        const users = await db("users").select("*").orderBy('country')
        return users
      }
      else{
        if(input?.start < input?.end){
          const users = await db("users").select("*").whereBetween('rank',[input.start, input.end]).orderBy('rank');
          return users
        }else if(input?.start > input?.end){
          const users = await db("users").select("*").whereBetween('rank',[input.start, input.end]).orderBy('rank');
          return users
        }else{
          const users = await db("users").select("*").whereBetween('rank',[1, 100]).orderBy('rank');
          return users
        }
      }
    }
  },

  Mutation: {
    passWeek: async (_:any, { input }:any, { req, res, db, client }:any) => {
      let poolPrice = await db("users").sum("money")
      //@ts-ignore
      poolPrice = parseFloat(Object.values(poolPrice[0])[0])*2/100
      await db("users").where({rank: 1}).increment('money',poolPrice*20/100)
      await db("users").where({rank: 2}).increment('money',poolPrice*15/100)
      await db("users").where({rank: 3}).increment('money',poolPrice*10/100)
      const after3price = (poolPrice*55/100)/97
      await db("users").whereBetween('rank',[4,100]).update({money: db.raw(`money + ${after3price}`)})
      poolPrice = 0
      let countUsers = await db("users").count()
      //@ts-ignore
      countUsers = parseInt(Object.values(countUsers[0])[0])

      return await db("users").select("*").whereBetween('rank',[1,100]).orderBy('rank')
    }
   
  }

}
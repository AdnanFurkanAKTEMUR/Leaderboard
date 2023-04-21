export default {

  Query: {
    getAllExamples: async (_:any, { input }:any, { req, res, db }:any) => {
      console.log("get all examples query")
      const allExs = await db('examples').select("*")
      console.log(allExs)
      return allExs
    }
  },

  Mutation: {
    deleteExample: async (_:any, { input }:any, { req, res, db }:any) => {
      console.log("deletwe examples mutation")
      return null
    }
  }

}
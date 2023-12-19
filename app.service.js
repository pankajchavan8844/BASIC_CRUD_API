
const model = require('../model/app.model');
const app = {
    
    postCollection: async function (topic) {
        return await model.create(topic)
    },
    deleteCollection: async function(id){
        return await model.findByIdAndDelete(id)
    },
    updateCollection: async function (id,topic) {
      return await model.findByIdAndUpdate(id,topic,{new:true})  
    },
    getCollection: async function () {
       return await model.find() 
    },
    findByIdCollection: async function (id) {
      return await model.findById(id)  
    },
    findByNameCollection: async function (name) {
        return await model.find({name})
    }
}
module.exports = app;
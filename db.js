const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://loki:1234loki@cluster0.maf972m.mongodb.net/GoFood?retryWrites=true&w=majority'

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        
        if (err) console.log("---" + err)
        else {
            
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            const data = await foodCollection.find({}).toArray();
            const categoryCollection = await mongoose.connection.db.collection("foodCategory");
            const Catdata = await categoryCollection.find({}).toArray();
            
            callback(err, data, Catdata);
        }
    })
};
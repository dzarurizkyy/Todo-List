const mongoose = require("mongoose");

module.exports = async () => {
    try {
    const URI = process.env.MONGODB_URL;
    mongoose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 

    }, err => {
        if(err) throw err;
        console.log('Connected to MongoDB!!!')
    });
        await mongoose.connect(
            "mongodb://localhost/todo-app",
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
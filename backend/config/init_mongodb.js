import mongoose from 'mongoose';

function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECT)
        .then(() => {
            console.log("Connected to MongoDB");
        }).catch((err) => {
            console.log(err);
        })
    //mongodb+srv://namnhhe161918:<password>@mern-wallquiz.0l1zw2i.mongodb.net/
}

export default connectDB;
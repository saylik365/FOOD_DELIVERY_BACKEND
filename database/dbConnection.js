import mongoose from "mongoose";

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "FOOD"
    }).then(() => {
        console.log('Database connected successfully');
    }).catch((err) =>{
        console.log('Error connecting to the database: ${err}');
    });
};
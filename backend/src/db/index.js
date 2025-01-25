import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";


const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URL)
        // console.log("MongoDB URL:", process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`); 
    } catch (error) {
        console.log("MongoDB connection error ", error);   
    }
}

export default connectDB
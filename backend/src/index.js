import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./aap.js";

dotenv.config({
    path: "./.env",
});

// Second way to connect with mongoDB
connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection Failed...", err);
    });

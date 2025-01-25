import express from "express";
import cors from "cors";

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);


export { app };

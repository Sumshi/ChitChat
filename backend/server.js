import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

import connectToMongoDB from './db/connectToMongoDB.js';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
// define the ports for the server
const PORT = process.env.PORT || 5000;
dotenv.config();// loads environment variables from a .env file into process.env

// N/B: The order of the middleware is important, define app.use before specifying the routes
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); // to parse the incoming cookies from the request headers

// instead of defining all routes here, use middleware to define routes in a separate file

// login, signup, logout routes
app.use("/api/auth", authRoutes);

// messages routes
app.use("/api/messages", messageRoutes);

// user routes
app.use("/api/users", userRoutes);

// listen to the port
app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server is running on port ${PORT}`);
});
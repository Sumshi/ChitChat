import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';


const app = express();
// define the ports for the server
const PORT = process.env.PORT || 5000;
dotenv.config();


// instead of defining all routes here, use middleware to define routes in a separate file
app.use("/api/auth", authRoutes);
app.use(express.json()); // to parse the incoming request with JSON payloads from req.body

// routes
// app.get('/', (req, res) => {
//     res.send('Hello World welcome to ChitChat!!!');
// });


// listen to the port
app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server is running on port ${PORT}`);
});
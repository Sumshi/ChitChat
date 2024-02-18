import express from 'express';
import dotenv from 'dotenv';

// import the file with our routes
import authRoutes from './routes/auth.routes.js';


const app = express();
dotenv.config();
// define the ports for the server
const PORT = process.env.PORT || 5000;
// routes
app.get('/', (req, res) => {
    res.send('Hello World welcome to ChitChat!!!');
});


// instead of defining all routes here, use middleware to define routes in a separate file
app.use("/api/auth", authRoutes);

// listen to the port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
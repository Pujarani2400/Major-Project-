const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port = 8000;
const { connectMongoDB } = require('./connection.js')
connectMongoDB('mongodb://localhost:27017/my-med-store');
app.use(express.urlencoded({ extended: false }))
const MyRouter = require('./Routes/route.js');
app.use('/api', MyRouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
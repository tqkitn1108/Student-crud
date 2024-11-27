const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

//middleware
app.use(cors());
app.use(express.json());

const studentRouter = require("./routes/StudentRoutes");
app.use("/", studentRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

module.exports = app;

const mongoose = require("mongoose");
dotenv.config();
const queryString = process.env.MONGODB_URI || "mongodb+srv://kientaquang:kientaquang123@cluster0.gbzwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(queryString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected!'));
mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error:', err.message);
})
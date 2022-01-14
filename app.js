const express=require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const helmet = require('helmet');

const app=express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(morgan('short'));
app.use(helmet())

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api",router);

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});
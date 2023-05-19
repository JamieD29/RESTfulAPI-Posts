const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const postRoute = require("./routes/posts.route");

app.use(bodyParser.json());

app.use('/posts',postRoute)

module.exports = app;

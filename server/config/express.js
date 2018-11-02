const express = require("express");
let app = express();
const consign = require("consign");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

consign({ cwd: "server" })
    .into(app);

module.exports = app;

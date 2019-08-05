const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('./dist'));
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

module.exports = app;
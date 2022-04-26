// Dependencies
const fs = require("fs");
const userDataBase = require("./db/db.json");
const path = require("path");
const express = require("express");
var PORT = process.env.PORT || 3001;
var app = express();

// Assets Linked
app.use(express.static("public"));

// Data Parsing (is required for API calls)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));    
});

app.get("/notes", function (req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Express Listening
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});
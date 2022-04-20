const fs = require("fs");
const userDataBase = require("./db/db.json");
const path = require("path");
const express = require("express");
var PORT = process.env.PORT || 3001;
var app = express();
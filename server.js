// Dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");
var PORT = process.env.PORT || 3001;
var app = express();

// Assets Linked
app.use(express.static("public"));

// Data Parsing (is required for API calls)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Router Require Files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Express Listening
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});
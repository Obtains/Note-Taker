//Dependencies
const path = require("path");

//Routes to go to both notes and index page
module.exports = function(app) {
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}
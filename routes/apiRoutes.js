// Dependencies
const fs = require("fs");
const userData = require("../db/db.json");

// GET Request
module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        res.json(userData);
    });

    //POST Request
    app.post("/api/notes", function (req, res) {
        userData.push(req.body);
        userData.forEach((notes, i) => {
            notes.deleteNoteId = i + 1;
        });
        fs.writeFile("./db/db.json", JSON.stringify(userData), function() {
            res.json(userData);
        });
    });

    // Delete Request
    app.delete("/api/notes/:id", function (req, res) {
        var deleteNoteId = req.params.id;
        userData.splice(deleteNoteId - 1, 1);
        userData.forEach((notes, i) => {
            notes.deleteNoteId = i + 1;
        });
        fs.writeFile("./db/db.json", JSON.stringify(userData), function() {
            res.json(userData);
        });
    });
};
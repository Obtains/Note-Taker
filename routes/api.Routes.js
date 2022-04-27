const userData = require("../db/db.json");
const fs = require("fs");

// GET Request
module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        res.json(userData);
    });

    //POST Request
    app.post("/api/notes", function (req, res) {
        userData.push(req.body);
        userData.forEach((notes, i) => {
            notes.id = i + 1;
        });
        fs.writeFile("./db/db.json", JSON.stringify(userData), function() {
            res.json(userData);
        });
    });
}
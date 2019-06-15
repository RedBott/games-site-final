const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const fs = require("fs");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views", "index.html"));
});

let users = [
  ];
  
let usersDb = require(path.join(__dirname, "/static/js", "db.json"));

app.post("/", (req, res) => {
    const userName = req.body.username;
    users.push(userName);
    const newuser = { "name": req.body.username, "score": 0};
    usersDb.push(newuser);
    fs.writeFileSync(
      path.join(__dirname, "static/js/db.json"),
      JSON.stringify(usersDb, null, 2)
    );
    res.sendFile(path.join(__dirname, "/views", "index.html"));
  });

// app.post("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "/views", "index.html"));
//   });
// console.log(test);
app.get("/snake", (req, res) => {
    console.log(req.params);
    // res.sendFile(path.join(__dirname, "/games/single-player/snake", "snake.html"));
    res.render(path.join(__dirname, "/games/single-player/snake", "snake"), {plyr:users[0]});
});

app.get("/mines", (req, res) => {
    console.log(req.params);
    res.sendFile(path.join(__dirname, "/games/single-player/mines", "mines.html"));
});

app.get("/tictactoe", (req, res) => {
    console.log(req.params);
    res.sendFile(path.join(__dirname, "/games/multi-player/tictactoe/", "tictactoe.html"));
});

app.get("*", (req, res) => {
    res.send("404 error");
});

app.listen(port, () => {
    console.log(`Starting server on port: ${port}!`);
});



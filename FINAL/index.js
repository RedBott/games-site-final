const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views", "index.html"));
});

app.get("/snake", (req, res) => {
    console.log(req.params);
    res.sendFile(path.join(__dirname, "/games/single-player/snake", "snake.html"));
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

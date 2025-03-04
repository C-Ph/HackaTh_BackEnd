const express = require('express');

const app = express();
const { apiRouter } = require('./src/api');

//use api router
app.use("/api", apiRouter);

// basic route
app.get("/", (req, res) => {
    console.log("Hi here form /");
    res.send("Hello basic route");
});

app.all("*", (req, res) => {
    res.send("404 not found dino");
});


//start app
app.listen(4000, () => {
    console.log("Run server on http://localhost:4000");
});

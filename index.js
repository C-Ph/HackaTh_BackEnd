const express = require('express');

const app = express();
const apiRouter = express.Router(); //create Rounter


// Handle GET request
apiRouter.get("/Dino", (req, res) => {
    res.send("API ROUNTER : Hi Dino");
});

app.use("/api", apiRouter);


app.get("/", (req, res) => {
    console.log("Hi here form /");
    res.send("Hello world");
});


app.all("*", (req, res) => {
    res.send("404 not found dino");
});

app.listen(4000, () => {
    console.log("Run server on http://localhost:4000");
});

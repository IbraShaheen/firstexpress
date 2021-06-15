const express = require("express");
const app = express();
const data = require("./data")


app.get("/movies", (req, res) => {

    res.json(data);
});

const PORT = 8080;

app.listen(PORT, () => 
console.log(`The application runs on localhost: ${PORT}`)
);
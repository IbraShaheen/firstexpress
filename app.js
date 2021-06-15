const express = require("express");
const app = express();
let data = require("./data")



const moviesRouters = require("./routes/moviesRoutes")

app.use(express.json()); // before all of our routes

// to get the array of data
app.use("/movies", moviesRouters);


const PORT = 8080;

app.listen(PORT, () => 
console.log(`The application runs on localhost: ${PORT}`)
);
const express = require("express");
const app = express();
// let data = require("./data")

const db = require("./db/models")



const moviesRouters = require("./routes/moviesRoutes")

app.use(express.json()); // before all of our routes

// to get the array of data
app.use("/movies", moviesRouters);





// db.sequelize.authenticate();

// db.sequelize.sync();

// db.sequelize.sync();

db.sequelize.sync();



app.listen(8080);
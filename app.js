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

db.sequelize.sync({alert: true});


// Not found middleware done
app.use((req,res,next)=> {
    res.status(404).json({msg: "Path not found"})
});


// Error middlware
app.use((err,req,res,next) => {
    res.status(err.status ?? 500).json({message: err.message ?? "Internal server error"});

   // or this >>>>>> res.status(err.status || 500).json({message: err.message || "Internal server error"});
});


app.listen(8080);
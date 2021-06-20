const express = require("express");

// let data = require("../data");
// controllers import here


// this is the first way
//const moviesControllers = require("../controllers/moviesControllers");

const { movieCreate, movieDelete, moviesList, movieDetail, movieUpdate } = require("../controllers/moviesControllers");


const router = express.Router();

// to get the array of data

router.get("/", moviesList);

// movies datail route
router.get("/:movieId", movieDetail);

// movies delete route
router.delete("/:movieId", movieDelete);

// movies create route
router.post("/", movieCreate);

router.put("/:movieId",movieUpdate);

module.exports = router;

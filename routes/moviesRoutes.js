const express = require("express");

// let data = require("../data");

// this is the first way
//const moviesControllers = require("../controllers/moviesControllers");

const { movieCreate, movieDelete, moviesList, movieDetail, movieUpdate, fetchMovie } = require("../controllers/moviesControllers");


const router = express.Router();


// to avoid repeting with fetch function
router.param("movieId",async (req,res,next,movieId)=>{
    const foundMovie = await fetchMovie(movieId,next)
//    req.movie=movie;

    if(foundMovie){
        req.movie=foundMovie;
        res.status(204).end();
        next();
    }else {
        next(res.status(404).json({message : "movie is not found"}))
    }
})




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

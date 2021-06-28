const express = require("express");


const { DATE } = require("sequelize");
//const multer = require("multer");

const upload = require("../media/middleWare/multer")

// let data = require("../data");

// this is the first way
//const moviesControllers = require("../controllers/moviesControllers");

const { movieCreate, movieDelete, moviesList, movieDetail, movieUpdate, fetchMovie } = require("../controllers/moviesControllers");


const router = express.Router();


// const storage = multer.diskStorage({
//    destination:"./media",
//    filename:(req,file,cb) => {
//        cb(null, `${+new Date()}${file.originalname}`)
//    }
// })

// const upload = multer({
//     storage:storage
// })


// to avoid repeting with fetch function
router.param("movieId",async (req,res,next,movieId)=>{
    const foundMovie = await fetchMovie(movieId,next)
        // req.movie=movie;

    if(foundMovie){
        req.movie=foundMovie;
        res.status(204).end();
        next();
    }else {
        next(res.status(404).json({message : "movie is not found"}))
    }
})


/*
// movies create route
router.post("/",upload.single("image"), movieCreate);
*/

// to get the array of data

router.get("/", moviesList);


// movies datail route
router.get("/:movieId", movieDetail);

// movies delete route
router.delete("/:movieId", movieDelete);


// movies update route
router.put("/:movieId",upload.single("image"),movieUpdate);

module.exports = router;

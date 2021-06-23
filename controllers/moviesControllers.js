// let data = require("../data");

// const Movies = require("../db/models");

// const MovieModel = require("../db/models/MoiveModel");

const {Movie} = require("../db/models");


// exports.moviesList = (req, res) =>  res.json(data);


//Fetch Movie Function
exports.fetchMovie= async (movieId,next)=>{
  try {
      const foundMovie= await Movie.findByPk(movieId);
      return (foundMovie)
  } catch (error) {
      next(error)
  }
}





///// movies list
exports.moviesList = async (req, res,next) =>  {
  
  try {
    const movies = await Movie.findAll({

        attributes : {exclude: ["createdAt","updatedAt"]}

    }
    );
        res.json(movies);
  } 
  catch (error) { 
    next(error);
    // res.status(500).json({msg: error.message ?? "Server Error"})
  }
  
};





exports.movieDetail = (req, res,next) => {
    const reqMovie = data.find(
      (movie) => movie.id === +req.params.movieId
    );
    if (reqMovie) {
      res.json(reqMovie);
    } else {
      next(error);
      // res.status(404).json({ msg: "This path is not found" });
    }
  };




  exports.movieCreate = async (req, res, next) => {
    try {
      req.body.image=`http://localhost:8080/media/${req.file.filename}`

        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie)

    } catch (error) {
      next(error);
        // res.status(500).json({msg: error.message ?? "server error"})
    }  
};



// old one

//   exports.movieDelete = (req,res)=>{
//     const reqMovie=data.find((movie)=>movie.id === +req.params.movieId);
//     if (reqMovie){
//         data = data.filter((movie)=>movie.id !== +req.params.movieId)
//         res.status(204).end();
//     }else {
//         res.status(404).json({msg:"This movie doesn't exist" })
//     }
// }


// exports.movieDelete = async (req, res, next) => {
//   try {
//       let foundMoive= await Movie.findByPk(req.params.movieId);
//       if(foundMoive){
//          await foundMoive.destroy();
//           res.status(204).end();
//       }else { 
//           res.status(404).json({message : "Moive is not found"})
//       }
//   } catch (error) {
//     next(error);
//       // res.status(500).json({message: error.message??"server error"})
//   }

// };

// exports.movieDelete =async (req, res, next) => {await req.movie.destroy();
  
  exports.movieDelete =async (req, res, next) => {
    try {
      await req.movie.destroy();
      // this >> await req.foundMovie.destroy();
      res.status(204).end();
    } catch (err) {
      next(error);
    }
  };



// exports.movieUpdate = async (req,res,next)=>{
//   try {
//       const foundMovie= await Movie.findByPk(req.params.movieId);
//   if(foundMovie){
//       await foundMovie.update(req.body)
//       // res.status(204).end();
//       res.status(201).end();
//   }else{
//       res.status(404).json({message : "movie is not found"})
//   }
//   } catch (error) {
//     next(error);
//       // res.status(500).json({message: error.message??"server error"})
//   }
  
// }


// exports.movieUpdate =async (req, res, next) => await req.movie.update(req.body);

// exports.movieUpdate =async (req, res, next) => {
//   try {
//     await req.movie.update(req.body)
//     // this >> await req.foundMovie.update(req.body);
//     res.status(204).end();
//   } catch (err) {
//     next(error);
//   }
// };

exports.movieUpdate =async (req, res, next) => {
  try {
    req.body.image=`http://${req.get("host")}/media/${req.file.filename}`
    
    await req.movie.update(req.body)
    res.json(req.movie);
  } catch (err) {
    next(err);
  }
};



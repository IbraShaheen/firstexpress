// let data = require("../data");

// const Movies = require("../db/models");

// const MovieModel = require("../db/models/MoiveModel");

const {Movie} = require("../db/models");


// exports.moviesList = (req, res) =>  res.json(data);


///// movies list
exports.moviesList = async (req, res) =>  {
  
  try {
    const movies = await Movie.findAll({

        attributes : {exclude: ["createdAt","updatedAt"]}

    }
    );
        res.json(movies);
  } 
  catch (error) { 
    res.status(500).json({msg: error.message ?? "Server Error"})
  }
  
};





exports.movieDetail = (req, res) => {
    const reqMovie = data.find(
      (movie) => movie.id === +req.params.movieId
    );
    if (reqMovie) {
      res.json(reqMovie);
    } else {
      res.status(404).json({ msg: "This path is not found" });
    }
  };




  exports.movieCreate = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie)

    } catch (error) {
        res.status(500).json({msg: error.message ?? "server error"})
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


exports.movieDelete = async (req, res) => {
  try {
      let foundMoive= await Movie.findByPk(req.params.movieId);
      if(foundMoive){
         await foundMoive.destroy();
          res.status(204).end();
      }else { 
          res.status(404).json({message : "Moive is not found"})
      }
  } catch (error) {
      res.status(500).json({message: error.message??"server error"})
  }

};



exports.movieUpdate = async (req,res)=>{
  try {
      const foundMovie= await Movie.findByPk(req.params.movieId);
  if(foundMovie){
      await foundMovie.update(req.body)
      // res.status(204).end();
      res.status(201).end();
  }else{
      res.status(404).json({message : "movie is not found"})
  }
  } catch (error) {
      res.status(500).json({message: error.message??"server error"})
  }
  
}




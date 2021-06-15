let data = require("../data");



exports.moviesList = (req, res) =>  res.json(data);

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



  exports.movieCreate = (req, res) => {
    req.body.id = data[data.length - 1].id + 1;
      req.body.slug =  req.body.name.toLowerCase().replace(/ /gi, "-");
    data.push(req.body);
    res.status(201).json(req.body);
  };



  exports.movieDelete = (req,res)=>{
    const reqMovie=data.find((movie)=>movie.id === +req.params.movieId);
    if (reqMovie){
        data = data.filter((movie)=>movie.id !== +req.params.movieId)
        res.status(204).end();
    }else {
        res.status(404).json({msg:"This movie doesn't exist" })
    }
}





exports.movieList = (req, res) => res.json(data);

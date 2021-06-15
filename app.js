const express = require("express");
const app = express();
let data = require("./data")


app.use(express.json()); // before all of our routes

// to get the array of data
app.get("/movies", (req, res) => {
    res.json(data);
});


// movies datial route
app.get("/movies/:movieId", (req, res) => {
    const reqMovie = data.find(
      (movie) => movie.id === +req.params.movieId
    );
    if (reqMovie) {
      res.json(reqMovie);
    } else {
      res.status(404).json({ msg: "This path is not found" });
    }
  });


  // movies delete route

  app.delete("/movies/:movieId",(req,res)=>{
    const reqMovie=data.find((movie)=>movie.id === +req.params.movieId);
    if (reqMovie){
        data = data.filter((movie)=>movie.id !== +req.params.movieId)
        res.status(204).end();
    }else {
        res.status(404).json({msg:"This movie doesn't exist" })
    }
})


    // movies create route
 app.post("/movies", (req, res) => {
    req.body.id = data[data.length - 1].id + 1;
      req.body.slug =  req.body.name.toLowerCase().replace(/ /gi, "-");
    data.push(req.body);
    res.status(201).json(req.body);
  });



  




const PORT = 8080;

app.listen(PORT, () => 
console.log(`The application runs on localhost: ${PORT}`)
);
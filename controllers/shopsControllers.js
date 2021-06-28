const {Shop,Movie} = require("../db/models");






//Fetch Shop Function
exports.fetchShop= async (shopId,next)=>{
  try {
      const foundShop= await Shop.findByPk(shopId);
      return (foundShop)
  } catch (error) {
      next(error)
  }
}





///// shops list
exports.shopsList = async (req, res,next) =>  {
  
  try {
    const shops = await Shop.findAll({

        attributes : {exclude: ["createdAt","updatedAt"]},

        include: [{
            model: Movie,
            attributes: ["id"],
            as: "movies"
         } ]

    }
    );
        res.json(shops);
  } 
  catch (error) { 
    next(error);
    // res.status(500).json({msg: error.message ?? "Server Error"})
  }
  
};





exports.shopDetail = (req, res,next) => {
    const reqShop = data.find(
      (shop) => shop.id === +req.params.shopId
    );
    if (reqShop) {
      res.json(reqShop);
    } else {
      next(error);
      // res.status(404).json({ msg: "This path is not found" });
    }
  };




  exports.shopCreate = async (req, res, next) => {
    try {
      req.body.image=`http://localhost:8080/media/${req.file.filename}`

        const newShop = await Shop.create(req.body);
        res.status(201).json(newShop)

    } catch (error) {
      next(error);
        // res.status(500).json({msg: error.message ?? "server error"})
    }  
};


//   exports.shopDelete =async (req, res, next) => {
//     try {
//       await req.shop.destroy();
//       // this >> await req.foundShop.destroy();
//       res.status(204).end();
//     } catch (err) {
//       next(error);
//     }
//   };



// exports.shopUpdate =async (req, res, next) => {
//   try {
//    //before migration// req.body.image=`http://${req.get("host")}/media/${req.file.filename}`
    
//     await req.shop.update(req.body)
//     res.json(req.shop);
//   } catch (err) {
//     next(err);
//   }
// };

exports.movieCreate = async (req, res, next) => {
    try {
        if(req.file){
     req.body.image=`http://${req.get("host")}/${req.file.filename}`
    }

     req.body.shopId = req.shop.id
     //req.body.shopId = req.params.shopId
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie)

    } catch (error) {
      next(error);
        // res.status(500).json({msg: error.message ?? "server error"})
    }  
};


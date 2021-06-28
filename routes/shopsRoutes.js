const express = require("express");


//const { DATE } = require("sequelize");
//const multer = require("multer");

const upload = require("../media/middleWare/multer")

// let data = require("../data");

// this is the first way
//const shopsControllers = require("../controllers/shopsControllers");

const { shopCreate, shopDelete, shopsList, shopDetail, shopUpdate, fetchShop,movieCreate } = require("../controllers/shopsControllers");
//const { movieCreate } = require("../controllers/moviesControllers"); 


const router = express.Router();




// to avoid repeting with fetch function
router.param("shopId",async (req,res,next,shopId)=>{
    const foundShop = await fetchShop(shopId,next)
        // req.shop=shop;

    if(foundShop){
        req.shop=foundShop;
        next();
    }else {
        next(res.status(404).json({message : "shop is not found"}))
    }
})



// movies create route
router.post("/:shopId/movies",upload.single("image"), movieCreate);


// shops create route
router.post("/",upload.single("image"), shopCreate);


// to get the array of data

router.get("/", shopsList);


// shops datail route
router.get("/:shopId", shopDetail);

// shops delete route
/// router.delete("/:shopId", shopDelete);


// shops update route
///   router.put("/:shopId",upload.single("image"),shopUpdate);

module.exports = router;

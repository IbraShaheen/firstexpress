

module.exports = (sequelize, DataTypes) => sequelize.define("Movie",{

name: {type:DataTypes.STRING,

    allowNull: false},

price:{type:DataTypes.INTEGER,
    defaultValue:5,

    validate: {
            min:0
    }
},
image : {type:DataTypes.STRING},

// image : {type:DataTypes.STRING,  validate: {isUrl: true},  allowNull:false},

description: {type:DataTypes.STRING}
})




// module.exports  =  (sequelize,DataTypes)=> sequelize.define("Movie",{
//         name:{
//             type:DataTypes.STRING,
//         },
//         price:{
//             type:DataTypes.INTEGER,
//         }
//     })


// module.exports=MovieModel;


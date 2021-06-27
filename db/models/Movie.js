const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("Movie",{

    name: {type:DataTypes.STRING , allowNull:false},

    price:{type:DataTypes.INTEGER,
        defaultValue:5,
    
        validate: {
                min:0
        }
    },
    image : {type:DataTypes.STRING, allowNull:false},

    description: {type:DataTypes.STRING},

    slug: {
        type: DataTypes.STRING,
        unique: true,
      },
    })


 
    SequelizeSlugify.slugifyModel(Movie, {
        source: ["name"],
      });

      return Movie;
    };


// module.exports = (sequelize, DataTypes) => sequelize.define("Movie",{

// name: {type:DataTypes.STRING,

//     allowNull: false},

// price:{type:DataTypes.INTEGER,
//     defaultValue:5,

//     validate: {
//             min:0
//     }
// },
// image : {type:DataTypes.STRING},

// // image : {type:DataTypes.STRING,  validate: {isUrl: true},  allowNull:false},

// description: {type:DataTypes.STRING},

// slug:{type:DataTypes.STRING,
// //  validate: {allowNull:false}
// }

// })

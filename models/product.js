module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
      UPC: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [1]
        }
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [1]
        }
        // defaultValue: "Personal"
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [1]
        }
        // defaultValue: "Personal"
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          len: [1]
        }
      }
    });
    return Product;
  };
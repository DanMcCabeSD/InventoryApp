// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the products
  app.get("/api/products", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Product.findAll({}).then(function(dbProducts) {
      // We have access to the products as an argument inside of the callback function
      res.json(dbProducts);
    });
  });

  app.get("/api/products/:id", function(req, res) {
    // Find one Product with the id in req.params.id and return them to the user with res.json
   db.Author.findOne({
     where: {
       id: req.params.id
     }
   }).then(function(dbProduct) {
     res.json(dbProduct);
   });
 });

  // POST route for saving a new product
  app.post("/api/newProduct", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Product.create({
      UPC: req.body.UPC,
      image_url: req.body.image,
      brand: req.body.brand,
      name: req.body.name,
      category: req.body.category,
      quantity: req.body.quantity
    }).then(function(dbProduct) {
      // We have access to the new product as an argument inside of the callback function
      res.json(dbProduct);
    });
  });

  // DELETE route for deleting products. We can get the id of the products to be deleted from
  // req.params.id
  app.delete("/api/products/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });

  });

  // PUT route for updating products. We can get the updated todo data from req.body
  app.put("/api/products", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Product.update({
      UPC: req.body.UPC,
      image_url: req.body.image,
      brand: req.body.brand,
      name: req.body.name,
      category: req.body.category,
      quantity: req.body.quantity
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

};

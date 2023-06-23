const db = require("../models");

const Products = db.products;

 

// Create and Save a new Product

exports.create = (req, res) => {

 // Create and Save a new Product

exports.create = (req, res) => {

  // Validate request

  if (!req.body.name) {

    res.status(400).send({ message: "Content can not be empty!" });

    return;

  }

 

  // Create a Product

  const product = new Products({

    name: req.body.name,

      description: req.body.description,

      price: req.body.price,

      category: req.body.category,

      published: req.body.published ? req.body.published : false

  });

 

  // Save Product in the database

  products

    .create(product)

    .then(data => {

      res.send(data);

    })

    .catch(err => {

      res.status(500).send({

        message:

          err.message || "Some error occurred while creating the product."

      });

    });

};

};

 

// Retrieve all Products from the database.

exports.findAll = (req, res) => {

 

};

 

// Find a single Product with an id

exports.findOne = (req, res) => {

 

};

 

// Update a Product by the id in the request

exports.update = (req, res) => {

 

};

 

// Delete a Product with the specified id in the request

exports.delete = (req, res) => {

 

};

 

// Delete all Products from the database.

exports.deleteAll = (req, res) => {

 

};

 

// Find all published Products

exports.findAllPublished = (req, res) => {

 

};
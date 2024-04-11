const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant.model");

module.exports.create = (req, res, next) => {
  console.log(req.body);
  Restaurant.create(req.body)
    .then((restaurant) => {
      res.status(201).json(restaurant);
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.status(400).json(err.errors);
      } else {
        next(err);
      }
    });
};

module.exports.list = (req, res, next) => {
  Restaurant.find()
    .then((restaurants) => {
      res.json(restaurants);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Restaurant.findById(req.params.id)
    .populate("comments")
    .then((restaurant) => {
      if (restaurant) {
        res.json(restaurant);
      } else {
        res.status(404).json({ message: "Restaurant not found" });
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Restaurant.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  })
    .then((restaurant) => {
      if (restaurant) {
        res.json(restaurant);
      } else {
        res.status(404).json({ message: "Restaurant not found" });
      }
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.status(400).json(err.errors);
      } else {
        next(err);
      }
    });
};

module.exports.delete = (req, res, next) => {
  Restaurant.findByIdAndDelete(req.params.id)
    .then((restaurant) => {
      if (restaurant) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Restaurant not found" });
      }
    })
    .catch(next);
};

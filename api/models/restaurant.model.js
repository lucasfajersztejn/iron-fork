const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categories = require('../data/categories.json');

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Name is required'
    },
    category: {
      type: String,
      enum: categories,
      required: 'Category is required'
    },
    tables: {
      type: Number,
      min: [1, 'Minimum number of tables are 1'],
      max: [100, 'Maximum number of tables are 100'],
      required: 'Amount of tables are required'
    },
    avgPrice: Number,
    address: {
      type: String,
      required: 'Address is required'
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  },
  { 
    timestamps: true
  }
);

restaurantSchema.index({ location: '2dsphere' });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;
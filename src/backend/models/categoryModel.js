const mongoose = require('mongoose');

// 1. create Schema
const categorySchema = new mongoose.Schema({
	name: {
      type: String,
      required: [true, 'Category required'],
      minlength: [3, 'Too short Category name'],
      maxlength: [255, 'Too long Category name'],
    },
	slug: {
      type: String,
	  lowercase: true,
      required: [true, 'Code required'],
      minlength: [3, 'Too short Code name'],
      maxlength: [255, 'Too long Code name'],
    },
	description: {
      type: String,
      required: [true, 'Description required'],
      minlength: [3, 'Too short Description name'],
      maxlength: [255, 'Too long Description name'],
    },
	image: {
      type: String,
      minlength: [3, 'Too short Parent name'],
      maxlength: [1000, 'Too long Parent name'],
    }
},
	{ timestamps: true }
);
// 2. create model
const CategoryModel = mongoose.models.Category || mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
const fs = require('fs');
require('colors');
const dotenv = require('dotenv');
const Category = require('../../models/categoryModel');
const SubCategory = require('../../models/subCategoryModel');
const Product = require('../../models/productModel');
const dbConnection = require('../../config/database');

dotenv.config({ path: '../../config.env' });

// connect to DB
dbConnection();

// Read data
const categories = JSON.parse(fs.readFileSync('./categories.json'));
const subcategories = JSON.parse(fs.readFileSync('./subcategories.json'));
const products = JSON.parse(fs.readFileSync('./products.json'));

const insertCategoriesData = async () => {
  try {
    await Category.create(categories);

    console.log('Data Inserted'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const insertSubCategoriesData = async () => {
  try {
    await SubCategory.create(subcategories);

    console.log('Data Inserted'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};
// Insert data into DB
const insertData = async () => {
  try {
    await Product.create(products);

    console.log('Data Inserted'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete data from DB
const destroyData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data Destroyed'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// node seeder.js -d
if (process.argv[2] === '-ip') {
  insertData();
} else if (process.argv[2] === '-dp') {
  destroyData();
}else if (process.argv[2] === '-ic') {
  insertCategoriesData();
}
else if (process.argv[2] === '-isc') {
  insertSubCategoriesData();
}
const slugify = require('slugify');
const { check, body } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');
const CategoryModel = require('../../models/CategoryModel');
const UserModel = require('../../models/UserModel');
const BrandModel = require('../../models/BrandModel');

exports.getProductValidator = [
  check('id').isMongoId().withMessage('Invalid product id format'),
  validatorMiddleware,
];

exports.createProductValidator = [
  check('title')
    .notEmpty()
    .withMessage('title required')
    .isLength({ min: 3 })
    .withMessage('Too short title name')
    .isLength({ max: 5000 })
    .withMessage('Too long title name')
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
	check('brand')
    .notEmpty()
    .withMessage('Product must be belong to a brand')
    .isMongoId()
    .withMessage('Invalid ID formate')
    .custom((brandId) =>
      BrandModel.findById(brandId).then((brand) => {
        if (!brand) {
          return Promise.reject(
            new Error(`No brand for this id: ${brandId}`)
          );
        }
      })
    ),
	check('user')
    .notEmpty()
    .withMessage('Product must be belong to a user')
    .isMongoId()
    .withMessage('Invalid ID formate')
    .custom((userId) =>
      UserModel.findById(userId).then((user) => {
        if (!user) {
          return Promise.reject(
            new Error(`No user for this id: ${userId}`)
          );
        }
      })
    ),
	check('categories')
    .optional()
    .isMongoId()
    .withMessage('Invalid ID formate')
    .custom((categoriesIds) =>
      CategoryModel.find({ _id: { $exists: true, $in: categoriesIds } }).then(
        (result) => {
          if (result.length < 1 || result.length !== categoriesIds.length) {
            return Promise.reject(new Error(`Invalid categories Ids`));
          }
        }
      )
    ),
	check('stores')
    .optional()
    .isMongoId()
    .withMessage('Invalid ID formate')
    .custom((storesIds) =>
      StoreModel.find({ _id: { $exists: true, $in: storesIds } }).then(
        (result) => {
          if (result.length < 1 || result.length !== storesIds.length) {
            return Promise.reject(new Error(`Invalid stores Ids`));
          }
        }
      )
    ),
  validatorMiddleware,
];

exports.updateProductValidator = [
  check('id').isMongoId().withMessage('Invalid product id format'),
  body('title')
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  validatorMiddleware,
];

exports.deleteProductValidator = [
  check('id').isMongoId().withMessage('Invalid product id format'),
  validatorMiddleware,
];
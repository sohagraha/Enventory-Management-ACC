const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brand.controller");

router.route("/")
    .get(brandController.getBrands)
    .post(brandController.createBrand);

router.route("/:id")
    .get(brandController.getBrandById)
    .delete(brandController.deleteBrandById)
    .patch(brandController.updateBrandById);

module.exports = router;
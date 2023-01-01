const { createBandService, getBrandsService, getBrandByIdService, deleteBrandByIdService, updateBrandByIdService } = require("../services/brand.services");


exports.createBrand = async (req, res, next) => {
    try {
        const result = await createBandService(req.body);
        res.status(200).json({
            status: "success",
            message: "Successfully created the brand",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't create the brand",
            error: error.message,
        });
    }
}
exports.getBrands = async (req, res, next) => {
    try {
        const result = await getBrandsService();
        res.status(200).json({
            status: "success",
            message: "Successfully retrieved the brands",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't retrieve the brands",
            error: error.message,
        });
    }
}
exports.getBrandById = async (req, res, next) => {
    try {
        const result = await getBrandByIdService(req.params.id);
        res.status(200).json({
            status: "success",
            message: "Successfully retrieved the brand",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't retrieve the brand",
            error: error.message,
        });
    }
}
exports.deleteBrandById = async (req, res, next) => {
    try {
        const result = await deleteBrandByIdService(req.params.id);
        res.status(200).json({
            status: "success",
            message: "Successfully deleted the brand",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't delete the brand",
            error: error.message,
        });
    }
}

exports.updateBrandById = async (req, res, next) => {
    try {
        const result = await updateBrandByIdService(req.params.id, req.body);
        res.status(200).json({
            status: "success",
            message: "Successfully updated the brand",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't update the brand",
            error: error.message,
        });
    }
}


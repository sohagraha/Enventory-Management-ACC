const Brand = require('../models/Brand');

exports.createBandService = async (brand) => {
    try {
        const result = await Brand.create(brand);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getBrandsService = async () => {
    try {
        const result = await Brand.find().select('-products -suppliers');
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getBrandByIdService = async (id) => {
    try {
        const result = await Brand.findById(id);
        if (!result) {
            return result.status(404).json({
                status: "fail",
                message: "Couldn't find the brand",
            });
        } else {
            return result;
        }
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteBrandByIdService = async (id) => {
    try {
        const result = await Brand.findByIdAndDelete(id);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

exports.updateBrandByIdService = async (id, brand) => {
    try {
        const result = await Brand.findByIdAndUpdate
            (id, brand, { new: true });
        return result;
    } catch (error) {
        throw new Error(error);
    }
}



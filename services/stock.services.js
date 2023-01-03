const Stock = require("../models/Stock");

exports.getStockService = async (req, res, next) => {
    try {
        const result = await Stock.find().populate('brand').populate('store').populate('suppliedBy');
        return result;
    } catch (error) {
        throw new Error(error);
    }
}
const { getStockService } = require("../services/stock.services");

exports.getStock = async (req, res, next) => {
    try {
        const result = await getStockService();
        res.status(200).json({
            status: "success",
            message: "Successfully retrieved the stock",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't retrieve the stock",
            error: error.message,
        });
    }
}
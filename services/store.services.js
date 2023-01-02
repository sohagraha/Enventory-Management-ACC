const Store = require("../models/Store");
exports.getStoreService = async (req,res) => {
    try {
        const result = await Store.find();
        res.status(200).json({
            status: "success",
            message: "Successfully retrieved the stores",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't retrieve the stores",
            error: error.message,
        });
    }
}
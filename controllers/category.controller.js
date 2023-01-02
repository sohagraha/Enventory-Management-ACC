const { getCategoryService } = require("../services/category.services");

exports.getCategory = async (req, res) => {
    try {
        const result = await getCategoryService();
        res.status(200).json({
            status: "success",
            message: "Successfully retrieved the categories",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't retrieve the categories",
            error: error.message,
        });
    }
}

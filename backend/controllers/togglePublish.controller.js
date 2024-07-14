const Dish = require("../models/dish.model");

exports.togglePublish = async (req, res) => {
    const { id } = req.params;
    try {
        const dish = await Dish.findOne({dishId: id});
        if (!dish) {
            return res.status(404).json({ 
                message: 'Dish not found' 
            });
        }

        dish.isPublished = !dish.isPublished;
        await dish.save();

        res.json({ message: 'Toggle Successful', dish });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: 'Internal Server Error' 
        });
    }
};
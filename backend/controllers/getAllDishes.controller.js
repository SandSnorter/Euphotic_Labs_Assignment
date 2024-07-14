const Dish = require("../models/dish.model");

exports.getAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.json(dishes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: 'Internal Server Error' 
        });
    }
};
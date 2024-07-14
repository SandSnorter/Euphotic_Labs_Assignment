const express = require("express");
const router = express.Router();
const GetAllDishesController = require("../controllers/getAllDishes.controller");

router.get("/", GetAllDishesController.getAllDishes);

module.exports = router;
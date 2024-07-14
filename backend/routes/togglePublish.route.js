const express = require("express");
const router = express.Router();
const TogglePublishController = require("../controllers/togglePublish.controller");

router.put("/:id/togglePublish", TogglePublishController.togglePublish);

module.exports = router;
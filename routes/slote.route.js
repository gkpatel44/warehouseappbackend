const express = require("express");
const router = express.Router();
const slote_controller = require("../controllers/slote.controller");
const verify = require("../middleware/token");

router.post("/add_slote", slote_controller.add_slote);

module.exports = router;
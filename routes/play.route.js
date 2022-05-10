const express = require("express");
const router = express.Router();
const play_controller = require("../controllers/play.controller");
const verify = require("../middleware/token");
const upload = require("../middleware/multer");

router.post("/add_bat", verify, play_controller.add_bat);
router.get("/find_bats", verify, play_controller.find_bats);
router.get("/win", verify, play_controller.win_bat);

module.exports = router;
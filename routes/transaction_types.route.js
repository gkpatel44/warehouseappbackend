const express = require("express");
const router = express.Router();
const app_controller = require("../controllers/transaction_types.controller");
const verify = require("../middleware/token");

router.post("/add_money", verify, app_controller.add_money);
router.post("/withdraw_money", verify, app_controller.withdraw_money);

module.exports = router;

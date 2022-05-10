const express = require("express");
const router = express.Router();
const wallet_controller = require("../controllers/wallet_history.controller");
const verify = require("../middleware/token");

router.post("/credit", verify, wallet_controller.credit);
router.post("/debit", verify, wallet_controller.debit);
router.get("/total_balance", verify, wallet_controller.total_balance);

module.exports = router;

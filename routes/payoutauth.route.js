const express = require("express");
const router = express.Router();
const payoutauth_controller = require("../controllers/payoutauth.controller");

router.post("/authorize", payoutauth_controller.authorization);
router.post("/verifyToken", payoutauth_controller.verification);
router.post("/getBalance", payoutauth_controller.get_balance);
router.post("/selfWithdrawal", payoutauth_controller.self_withdrawal);
router.post("/internalTransfer", payoutauth_controller.internal_transfer);

module.exports = router;
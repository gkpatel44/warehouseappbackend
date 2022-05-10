const express = require("express");
const router = express.Router();
const refund_controller = require("../controllers/refund.controller");

router.post("/refund", refund_controller.refund);
router.post("/get_refunds", refund_controller.fatch_all_refund);

module.exports = router;

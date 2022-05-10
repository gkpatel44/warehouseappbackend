const express = require("express");
const router = express.Router();
const order_controller = require("../controllers/order.controller");

router.post("/order", order_controller.createOrders);
router.post("/get_order", order_controller.getDetails);
router.post("/order_status", order_controller.getStatus);

module.exports = router;

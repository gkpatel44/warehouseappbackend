const express = require("express");
const router = express.Router();
const transfer_controller = require("../controllers/transfer.controller");

router.post("/requestTransfer", transfer_controller.requestTransfer);
router.post("/requestAsyncTransfer", transfer_controller.async_request_transfer);
router.post("/getTransferStatus", transfer_controller.getTransferStatus);
router.post("/requestBatchTransfer", transfer_controller.requestBatchTransfer);
router.post("/getBatchTransferStatus", transfer_controller.getBatchTransferStatus);

module.exports = router;

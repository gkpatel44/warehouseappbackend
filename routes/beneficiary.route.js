const express = require("express");
const router = express.Router();
const bene_controller = require("../controllers/beneficiary.controller");

router.post("/addBeneficiary", bene_controller.add_beneficiary)
router.post("/getBeneficiary", bene_controller.beneficiary_details);
router.post("/getBeneId", bene_controller.getbeneficiaryId);
router.post("/removeBeneficiary", bene_controller.remove_beneficiary);
router.post("/beneHistory", bene_controller.beneficiary_history);

module.exports = router;
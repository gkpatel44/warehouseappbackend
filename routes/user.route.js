const express = require("express");
const router = express.Router();
const auth_controller = require("../controllers/user.controller");
const verify = require("../middleware/token");
const upload = require("../middleware/multer");

router.post("/signup", upload.single("profile"), auth_controller.signup);
router.post("/login", auth_controller.login);
router.post("/send_otp" ,auth_controller.otpsend);
router.post("/resend_otp" ,auth_controller.resend_otp);
router.post("/forgot_password", auth_controller.forgot_password);
router.post("/verify_otp" ,auth_controller.verify_otp);
router.post("/reset_password", verify, auth_controller.reset_password);
router.put("/change_password", verify, auth_controller.change_password);

module.exports = router;

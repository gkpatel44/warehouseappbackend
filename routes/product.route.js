const express = require("express");
const router = express.Router();
const product_controller = require("../controllers/product.controller");


router.post('/createProduct', product_controller.createProduct);
router.post('/editProduct', product_controller.editProduct);
router.delete('/deleteProduct', product_controller.deleteProduct);
router.post('/getProduct', product_controller.getProduct);


// router.post("/signup", upload.single("profile"), auth_controller.signup);
// router.post("/login", auth_controller.login);
// router.post("/send_otp", auth_controller.otpsend);
// router.post("/resend_otp", auth_controller.resend_otp);
// router.post("/forgot_password", auth_controller.forgot_password);
// router.post("/verify_otp", auth_controller.verify_otp);
// router.post("/reset_password", verify, auth_controller.reset_password);
// router.put("/change_password", verify, auth_controller.change_password);

module.exports = router;
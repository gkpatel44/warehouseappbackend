const express = require("express");
const router = express.Router();
const categories_controller = require("../controllers/categories.controller");


router.post('/addCategories', categories_controller.addCategories);
router.get('/getCategories', categories_controller.getCategories)



module.exports = router;
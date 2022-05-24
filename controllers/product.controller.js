

const Product = require("../models/product.model")

exports.getProduct = async (req, res, next) => {

    if (req.body.id) {
        Product.find({ productId: req.body.id }, (err, data) => {
            if (err) {
                return res.status(400).send(err);
            } else {
                console.log("this is data", data);
                res.status(200).send(data)
            }
        });
    } else {
        Product.find({}, (err, data) => {
            if (err) {
                return res.status(400).send(err);
            } else {
                console.log("this is All data", data);
                res.status(200).send(data)
            }

        })
    }


}


exports.deleteProduct = async (req, res, next) => {

}
exports.editProduct = async (req, res, next) => {

}
exports.createProduct = async (req, res, next) => {
    const { name, categoriesId, barcode, status, totalqty, sellqty,
        storeqty, price, addedDate } = req.body

    let product = new Product({
        name: name,
        categoriesId: categoriesId,
        barcode: barcode,
        status: status,
        totalqty: totalqty,
        sellqty: sellqty,
        storeqty: storeqty,
        price: price,
        addedDate: addedDate
    });
    console.log(!(product.name &&
        product.categoriesId &&
        product.barcode &&
        product.status &&
        // product.totalqty &&
        // product.sellqty &&
        // product.storeqty &&
        product.price)
    );
    if (!(product.name &&
        product.categoriesId &&
        product.barcode &&
        product.status &&
        product.price
    ) || (product.totalqty == 0 || undefined)) {
        return res.status(400).send({ error: "Please enter all values" });
    }
    else {
        product.save((err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                console.log(data);
                res.status(200).send(data);
            }
        });
    }











}
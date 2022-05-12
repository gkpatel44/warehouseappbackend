const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        index: true,
        auto: true
    },
    name: { type: String },
    categoriesId: { type: String },
    barcode: { type: String },
    status: { type: String },
    totalqty: { type: Number, default: 1 },
    sellqty: { type: Number, default: 0 },
    storeqty: { type: Number, default: 0 },
    price: { type: Number, rquired: true },
    addedDate: { type: Date, default: Date.now },
})
module.exports = mongoose.model("product", ProductSchema);
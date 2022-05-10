const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
    orderId: { type: String, required: true },
    orderAmount: { type: Number, required: true },
    orderCurrency: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerName: { type: String, required: true },
    customerPhone: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

//Export the model
module.exports = mongoose.model("order", OrderSchema);
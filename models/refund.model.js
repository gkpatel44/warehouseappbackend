const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RefundSchema = new Schema({
    referenceId: { type: String, required: true },
    refundAmount: { type: Number, required: true },
    refundNote: { type: String },
    date: { type: Date, default: Date.now },
});

//Export the model
module.exports = mongoose.model("refund", RefundSchema);
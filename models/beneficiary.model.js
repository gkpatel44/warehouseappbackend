const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BeneficiarySchema = new Schema({
    beneId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    bankAccount: { type: String, required: true },
    address1: { type: String, required: true },
    city: { type: String, default: Date.now },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
});

//Export the model
module.exports = mongoose.model("Beneficiary", BeneficiarySchema);
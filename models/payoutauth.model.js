const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PayoutauthSchema = new Schema({
  beneId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  bankAccount: { type: String, required: true },
  address1: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: Number, required: true },
});

//Export the model
module.exports = mongoose.model("Payoutauth", PayoutauthSchema);

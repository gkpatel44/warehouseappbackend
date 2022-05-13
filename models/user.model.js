const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AuthSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  name: { type: String },
  // otp: { type: Number },
  password: { type: String, required: true },
  status: { type: String },
  statusMsg: { type: String },
  storeId: { type: String },
  role: { type: String }
});

//Export the model
module.exports = mongoose.model("user", AuthSchema);

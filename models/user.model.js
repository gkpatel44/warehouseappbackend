const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AuthSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  // name: { type: String },
  // otp: { type: Number },
  password: { type: String, required: true },
  status: { type: Boolean, default: true },
  statusMsg: { type: String },
  storeId: { type: String, default: "0" },
  role: { type: String },
  parentId: { type: String, default: "0" },
  delete: { type: Boolean, default: false },
},
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("user", AuthSchema);

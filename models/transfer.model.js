const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TransferSchema = new Schema({
  beneId: { type: String, required: true },
  amount: { type: Number, required: true },
  transferId: { type: String, required: true },
  transferMode: { type: String },
  remarks: { type: String },
});

//Export the model
module.exports = mongoose.model("Transfer", TransferSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let WalletSchema = new Schema({
  user_id: { type: String, required: true },
  amount: { type: Number, required: true },
  transaction_type_id: { type: String, required: true },
  transaction_type: { type: String, required: true },
  description: { type: String, required: true },
});

//Export the model
module.exports = mongoose.model("wallet_history", WalletSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AppSchema = new Schema({
  text: { type: String, required: true },
});

//Export the model
module.exports = mongoose.model("transaction_types", AppSchema);

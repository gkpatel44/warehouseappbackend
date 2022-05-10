const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SloteSchema = new Schema({
  slote_name: { type: String, required: true },
  created_at : { type : Date, default: Date.now }
});

//Export the model
module.exports = mongoose.model("slotes", SloteSchema);
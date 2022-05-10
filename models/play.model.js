const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PlaySchema = new Schema({
  user_id:{type: String},
  slote_id: { type: String, required: true },
  number: { type: Number, required: true , min:1 , max:10 },
  status: { type: String ,enum:['success','pending','fail']},
  amount: { type: Number, required: true },
  created_at : { type: Date, default:Date.now },
});

//Export the model
module.exports = mongoose.model("play", PlaySchema);
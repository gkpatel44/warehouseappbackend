const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StoreSchema = new Schema({
    storeId: {
        type: Schema.Types.ObjectId,
        index: true,
        auto: true
    },

    name: { type: String },
    location: { type: String }
});

//Export the model
module.exports = mongoose.model("store", StoreSchema);

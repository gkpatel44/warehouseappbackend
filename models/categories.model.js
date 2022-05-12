const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let CategoriesSchema = new Schema({
    categoriesId: {
        type: Schema.Types.ObjectId,
        index: true,
        auto: true
    },
    name: { type: String },
    status: { type: String }
});

module.exports = mongoose.model("categories", CategoriesSchema)
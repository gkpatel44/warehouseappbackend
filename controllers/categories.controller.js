const Categories = require("../models/categories.model");

exports.addCategories = async (req, res, next) => {
    const { name, status } = req.body;
    let categories = new Categories({
        name: name,
        status: status
    });

    if (!(categories.name && categories.status)) {
        return res.status(400).send({ error: "Please enter all categories values" });
    }

    categories.save((err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            console.log(data);
            res.status(200).send(data);
        }
    });
}

exports.getCategories = async (req, res, next) => {

    if (req.body.id) {
        const { id } = req.body;
        Categories.find({ _id: id }, (err, data) => {
            if (err) {
                return res.status(400).send(err);
            } else {
                console.log("this is data", data);
                res.status(200).send(data)
            }
        }
        )
    }

    Categories.find({}, (err, data) => {
        if (err) {
            return res.status(400).send(err);
        } else {
            console.log("this is data", data);
            res.status(200).send(data)
        }
    }
    )
}
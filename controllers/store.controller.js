const Store = require("../models/store.model");
exports.addToStore = async (req, res, next) => {
    const { name, location } = req.body;


    let store = new Store({
        name: name,
        location: location
    });


    if (!(store.name && store.location)) {
        return res.status(400).send({ error: "Please enter all values" });
    }

    store.save((err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            console.log(data);
            res.status(200).send(data);
        }
    });

}
exports.getStore = async (req, res, next) => {
    const { id } = req.body;
    Store.find({ _id: id }, (err, data) => {
        if (err) {
            return res.status(400).send(err);
        } else {
            console.log("this is data", data);
            res.status(200).send(data)
        }
    }
    ).limit(1)
}
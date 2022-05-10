const Slote = require("../models/slote.model");

exports.add_slote = (req, res) => {
  let slote = new Slote({
    slote_name: req.body.slote_name,
  });

  if (!slote.slote_name) {
    return res.status(400).send({ error: "Please enter all values" });
  }

  slote.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
};

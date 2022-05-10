const App = require("../models/transaction_types.model");

exports.add_money = (req, res) => {
  console.log(req.userDetails);
  let app = new App({
    text: "add money",
  });

  if (!app.text) {
    return res.status(400).send({ error: "Please enter all values" });
  }

  app.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data);

      res.status(200).send(data);
    }
  });
};

exports.withdraw_money = (req, res) => {
  console.log(req.userDetails);
  let app = new App({
    text: "withdraw money",
  });

  if (!app.text) {
    return res.status(400).send({ error: "Please enter all values" });
  }

  app.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
};

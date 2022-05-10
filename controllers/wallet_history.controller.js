const Wallet = require("../models/wallet_history.model");

exports.credit = async (req, res) => {
  let wallet = new Wallet({
    user_id: req.userDetails.user_id,
    amount: req.body.amount,
    transaction_type_id: "606be5ca3cd13a258a3ce5ee",
    transaction_type: "credit",
    description: req.body.description,
  });

  if (!(wallet.amount && wallet.description)) {
    return res.status(400).send({ error: "Please enter all values" });
  }

  wallet.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
};

exports.debit = async (req, res, next) => {
  let wallet = new Wallet({
    user_id: req.userDetails.user_id,
    amount: req.body.amount,
    transaction_type_id: "606be5bbfa2c77255e9a04d4",
    transaction_type: "debit",
    description: req.body.description,
  });

  if (!(wallet.amount && wallet.description)) {
    return res.status(400).send({ error: "Please enter all values" });
  }

  let credituser = await Wallet.find(
    { user_id: req.userDetails.user_id, transaction_type: "credit" },
    { _id: 0, amount: 1 }
  );
  let debituser = await Wallet.find(
    { user_id: req.userDetails.user_id, transaction_type: "debit" },
    { _id: 0, amount: 1 }
  );

  let credit = [];
  for (let index = 0; index < credituser.length; index++) {
    credit.push(credituser[index].amount);
  }

  let debit = [];
  for (let index = 0; index < debituser.length; index++) {
    debit.push(debituser[index].amount);
  }

  let total_credit = credit.reduce((a, b) => a + b, 0);

  let total_debit = debit.reduce((a, b) => a + b, 0);

  let total_balance = total_credit - total_debit;

  if (total_balance < wallet.amount) {
    return res.status(400).send({ error: "balance is not available" });
  } else {
    wallet.save((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(data);
        res.status(200).send(data);
      }
    });
  }
};

exports.total_balance = async (req, res) => {
  let credituser = await Wallet.find(
    { user_id: req.userDetails.user_id, transaction_type: "credit" },
    { _id: 0, amount: 1 }
  );

  let debituser = await Wallet.find(
    { user_id: req.userDetails.user_id, transaction_type: "debit" },
    { _id: 0, amount: 1 }
  );

  let credit = [];
  for (let index = 0; index < credituser.length; index++) {
    credit.push(credituser[index].amount);
  }

  let debit = [];
  for (let index = 0; index < debituser.length; index++) {
    debit.push(debituser[index].amount);
  }

  let total_credit = credit.reduce((a, b) => a + b, 0);

  let total_debit = debit.reduce((a, b) => a + b, 0);

  let total_balance = total_credit - total_debit;
  console.log("total_balance :", total_balance);
};

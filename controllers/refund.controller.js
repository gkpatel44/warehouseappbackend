const Refund = require("../models/refund.model");
const Constants = require("../middleware/constants");
const Http = require("../middleware/http");
const helper = require("../middleware/function");

exports.refund = async (req, res) => {
  let env = process.env.mode;
  let appId = process.env.appId;
  let secretKey = process.env.secretKey;
  const upperCasedEnv = env.toUpperCase();
  const hostname = Constants[`${upperCasedEnv}_BASE_URL`];

  if (!(appId && secretKey)) {
    throw new Error("Invalid parameters!");
  }
  let data = req.body;
  data.appId = appId;
  data.secretKey = secretKey;
  const api = new Http({
    hostname,
    path: Constants.REFUNDS,
    data: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  let refund = new Refund({
    referenceId: req.body.referenceId,
    refundAmount: req.body.refundAmount,
    refundNote: req.body.refundNote,
  });
  refund.save({});

  try {
    const result = await api.post({});
    return res.status(200).send(result);
  } catch (e) { 
    return {
      status: "ERROR",
      message: (e && e.message) || "Something went wrong",
    };
  }
};

exports.fatch_all_refund = async (req, res) => {
  let env = process.env.mode;
  let appId = process.env.appId;
  let secretKey = process.env.secretKey;
  const upperCasedEnv = env.toUpperCase();
  const hostname = Constants[`${upperCasedEnv}_BASE_URL`];

  if (!(appId && secretKey)) {
    throw new Error("Invalid parameters!");
  }

  let data = req.body;
  data.appId = appId;
  data.secretKey = secretKey;
  const api = new Http({
    hostname,
    path: Constants.REFUND_STATUS,
    data: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  try {
    const result = await api.post({});
    return res.status(200).send(result);
  } catch (e) {
    return {
      status: "ERROR",
      message: (e && e.message) || "Something went wrong",
    };
  }
};
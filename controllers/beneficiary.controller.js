const Bene = require("../models/beneficiary.model");
const Constants = require("../middleware/constants");
const Http = require("../middleware/http");

exports.add_beneficiary = async (req, res) => {
  let env = process.env.mode;
  const upperCasedEnv = env.toUpperCase();
  const hostname = Constants[`${upperCasedEnv}_BASE`];

  let data = req.body;
  const api = new Http({
    hostname,
    path: Constants.BENEFICIARY_ADD,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${req.headers.authorization}`,
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

// PENDING API
exports.beneficiary_details = async (req, res) => {
  let env = process.env.mode;
  const upperCasedEnv = env.toUpperCase();
  const hostname = Constants[`${upperCasedEnv}_BASE`];

  let data = req.query.beneId;

  const path = Constants.BENEFICIARY_GET_BY_ID + encodeURIComponent(data);

  const api = new Http({
    hostname,
    path: path,
    //   data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${req.headers.authorization}`,
    },
  });

  try {
    const result = await api.get({});
    return res.status(200).send(result);
  } catch (e) {
    return {
      status: "ERROR",
      message: (e && e.message) || "Something went wrong",
    };
  }
};

// PENDING API
exports.getbeneficiaryId = async (req, res) => {
  let env = process.env.mode;
  const upperCasedEnv = env.toUpperCase();
  const hostname = Constants[`${upperCasedEnv}_BASE`];

  let data = {
    bankAccount: req.body.bankAccount,
    ifsc: req.body.ifsc,
  };

  let params = "?";
  params += "bankAccount=" + encodeURIComponent(data.bankAccount);
  params += "&ifsc=" + encodeURIComponent(data.ifsc);

  const path = Constants.BENEFICIARY_GET_ID_BY_BANK_DETAILS + params;

  const api = new Http({
    hostname,
    path: path,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: req.headers.authorization,
    },
  });

  try {
    const result = await api.get({});
    return res.status(200).send(result);
  } catch (e) {
    return {
      status: "ERROR",
      message: (e && e.message) || "Something went wrong",
    };
  }
};

exports.remove_beneficiary = async (req, res) => {
  let env = process.env.mode;
  const upperCasedEnv = env.toUpperCase();
  const hostname = Constants[`${upperCasedEnv}_BASE`];

  let data = req.body;
  const api = new Http({
    hostname,
    path: Constants.BENEFICIARY_REMOVE,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${req.headers.authorization}`,
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

exports.beneficiary_history = async (req, res) => {
  let env = process.env.mode;
  const upperCasedEnv = env.toUpperCase();
  const hostname = Constants[`${upperCasedEnv}_BASE`];

  let data = req.body;
  const api = new Http({
    hostname,
    path: Constants.BENEFICIARY_HISTORY,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: req.headers.authorization,
    },
  });

  try {
    const result = await api.get({});
    return res.status(200).send(result);
  } catch (e) {
    return {
      status: "ERROR",
      message: (e && e.message) || "Something went wrong",
    };
  }
};
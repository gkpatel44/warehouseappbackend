const cfSdk = require('cashfree-sdk');
const Payoutauth = require("../models/payoutauth.model");
const Constants = require("../middleware/constants");
const Http = require("../middleware/http");
const helper = require("../middleware/function");

exports.authorization = async (req, res) => {
    let env = process.env.mode;
    const upperCasedEnv = env.toUpperCase();
    const hostname = Constants[`${upperCasedEnv}_BASE`];

    const api = new Http({
      hostname,
      path: Constants.AUTH,
      // data: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Client-Id": "CF66292C2582H0EVK9HKISILIU0",
        "X-Client-Secret": "dabe7458f1fef6a4bb6bd6c8fdf5cf49a1a16c04"
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


  exports.verification = async (req, res) => {
    let env = process.env.mode;
    const upperCasedEnv = env.toUpperCase();
    const hostname = Constants[`${upperCasedEnv}_BASE`];

    const api = new Http({
      hostname,
      path: Constants.VERIFY,
      // data: data,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${req.headers.authorization}`
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

  exports.get_balance = async (req, res) => {
    let env = process.env.mode;
    // let result = cfSdk.Payouts.GetBalance();
    const upperCasedEnv = env.toUpperCase();
    const hostname = Constants[`${upperCasedEnv}_BASE`];

    const api = new Http({
      hostname,
      path: Constants.GET_BALANCE,
    //   data: ,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${req.headers.authorization}`
      },
    });
  
    try {
      const result = await api.get(api);
      return res.status(200).send(result);
    } catch (e) {
      return {
        status: "ERROR",
        message: (e && e.message) || "Something went wrong",
      };
    }
  };
  


  exports.self_withdrawal = async (req, res) => {

    let env = process.env.mode;
    req.body.withdrawalId = helper.withdrawalId();
    const upperCasedEnv = env.toUpperCase();
    const hostname = Constants[`${upperCasedEnv}_BASE`];

    let data = req.body;
    const api = new Http({
      hostname,
      path: Constants.SELF_WITHDRAWAL,
      data: data,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${req.headers.authorization}`
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
  
  }


  exports.internal_transfer = async (req, res) => {

    let env = process.env.mode;
    const upperCasedEnv = env.toUpperCase();
    const hostname = Constants[`${upperCasedEnv}_BASE`];

    let data = req.body;
    const api = new Http({
      hostname,
      path: Constants.INTERNAL_TRANSFER,
      data: data,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${req.headers.authorization}`
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
  
  }
const Refund = require("../models/refund.model");
const Constants = require("../middleware/constants");
const Http = require("../middleware/http");
const helper = require("../middleware/function");


exports.requestTransfer = async (req, res) => {
    let env = process.env.mode;
    const upperCasedEnv = env.toUpperCase();
    const hostname = Constants[`${upperCasedEnv}_BASE`];
  
    let data = req.body;
    const api = new Http({
      hostname,
      path: Constants.REQUEST_TRANSFER,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization,
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

  exports.async_request_transfer = async (req, res) => {
    let env = process.env.mode;
    const upperCasedEnv = env.toUpperCase();
    const hostname = Constants[`${upperCasedEnv}_BASE`];
  
    let data = req.body;
    const api = new Http({
      hostname,
      path: Constants.ASYNC_REQUEST_TRANSFER,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization,
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


  exports.getTransferStatus = async (req, res) => {
    let env = process.env.mode;
    const upperCasedEnv = env.toUpperCase();
    const hostname = Constants[`${upperCasedEnv}_BASE`];
  
    let data = req.body;
    const api = new Http({
      hostname,
      path: Constants.GET_TRANSFER_STATUS,
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

  exports.requestBatchTransfer = async (req, res) => {
    let env = process.env.mode;
    const upperCasedEnv = env.toUpperCase();
    const hostname = Constants[`${upperCasedEnv}_BASE`];
  
    let data = req.body;
    const api = new Http({
      hostname,
      path: Constants.REQUEST_BATCH_TRANSFER,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization,
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


  exports.getBatchTransferStatus = async (req, res) => {
    let env = process.env.mode;
    const upperCasedEnv = env.toUpperCase();
    const hostname = Constants[`${upperCasedEnv}_BASE`];
  
    let data = req.body;
    const api = new Http({
      hostname,
      path: Constants.REQUEST_BATCH_TRANSFER,
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
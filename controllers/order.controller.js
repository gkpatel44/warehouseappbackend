const Order = require("../models/order.model");
const Constants = require("../middleware/constants");
const Http = require("../middleware/http");
const helper = require("../middleware/function");

// const verifyCredentials = async ({ env, appId, secretKey }) => {
//   const upperCasedEnv = env.toUpperCase();
//   const hostname = Constants[`${upperCasedEnv}_BASE_URL`];

//   if (!(appId && secretKey)) {
//     throw new Error("Invalid parameters!");
//   }

//   const api = new Http({
//     hostname,
//     path: Constants.VERIFY_CREDENTIALS,
//     data: { appId, secretKey },
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   });

//   try {
//     const result = await api.post({});
//     return result;
//   } catch (e) {
//     return {
//       status: "ERROR",
//       message: (e && e.message) || "Something went wrong",
//     };
//   }
// };

exports.createOrders = async (req, res) => {
  let env = process.env.mode;
  let appId = process.env.appId;
  let secretKey = process.env.secretKey;
  req.body.orderId = helper.orderId();
  const upperCasedEnv = env.toUpperCase();
  const hostname = Constants[`${upperCasedEnv}_BASE_URL`]

  if (!(appId && secretKey)) {
    throw new Error("Invalid parameters!");
  }
  let data = req.body;
  data.appId = appId;
  data.secretKey = secretKey;
  const api = new Http({
    hostname,
    path: Constants.ORDER_CREATE,
    data: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  let order = new Order({
    orderId: req.body.orderId,
    orderAmount: req.body.orderAmount,
    orderCurrency: 'INR',
    customerEmail: req.body.customerEmail,
    customerName: req.body.customerName,
    customerPhone: req.body.customerPhone
  });
  order.save({})

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

exports.getDetails = async (req, res) => {

  let env = process.env.mode;
  let appId = process.env.appId;
  let secretKey = process.env.secretKey;
  // req.body.orderId = helper.orderId();
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
    path: Constants.ORDER_GET_LINK,
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

}

exports.getStatus = async (req, res) => {

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
    path: Constants.ORDER_GET_STATUS,
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

}
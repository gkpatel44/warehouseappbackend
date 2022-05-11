const mongoose = require("mongoose").set("debug", true);
const express = require("express");
const apps = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const auth = require("./routes/user.route");
const app = require("./routes/transaction_types.route");
const wallet = require("./routes/wallet_history.route");
const play = require("./routes/play.route");
const slote = require("./routes/slote.route");
const order = require("./routes/order.route");
const refund = require("./routes/refund.route");
const payoutauth = require("./routes/payoutauth.route");
const bene = require("./routes/beneficiary.route");
const transfer = require("./routes/transfer.route");
var multer = require("multer");
var upload = multer();

apps.use(upload.array());
apps.use(express.static("public"));

apps.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  res.header(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0"
  );
  next();
});

const CONNECTION_URL = process.env.MONGODB_URI;
const mongoDB = process.env.MONGODB_URI || CONNECTION_URL;

mongoose.connect(mongoDB);


mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

apps.use(express.json());
apps.use(express.urlencoded({ extended: true }));
apps.get("/", (req, res) => {
  res.send("welcome to app****")
})
apps.use("/auth", auth);

apps.use("/app", app);
apps.use("/wallet", wallet);
apps.use("/play", play);
apps.use("/slote", slote);
apps.use("/order", order);
apps.use("/refund", refund);
apps.use("/payoutauth", payoutauth);
apps.use("/bene", bene);
apps.use("/transfer", transfer);

apps.listen(process.env.PORT, () => {
  console.log("Server is up and running on port number " + process.env.PORT);
});

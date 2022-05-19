var nodemailer = require("nodemailer");
const func = require("../middleware/function");
require("dotenv").config();
const Auth = require("../models/user.model");
const bcrypt = require("bcrypt");
const SendOtp = require("sendotp");
const jwt = require("jsonwebtoken");
const sendOtp = new SendOtp("AuthKey");
sendOtp.setOtpExpiry("90"); //in minutes

exports.signup = async (req, res, next) => {
  let isValidEmail = func.validateEmail(req.body.email);
  let isValidPhone = func.validatePhone(req.body.phone);

  if (isValidEmail) {
    if (isValidPhone) {
      let auth = new Auth({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        status: req.body.status,
        statusMsg: req.body.statusMsg,
        storeId: req.body.storeId,
        role: req.body.role
      });

      if (!(auth.phone && auth.email && auth.password)) {
        return res.status(400).send({ error: "Please enter all values" });
      }

      const salt = await bcrypt.genSalt(9);
      auth.password = await bcrypt.hash(auth.password, salt);
      const a = await Auth.findOne({ phone: auth.phone });
      const b = await Auth.findOne({ email: auth.email });
      if (a) {
        return res.status(400).send({ error: "user found with this phone" });
      } else {
        if (b) {
          return res.status(400).send({ error: "user found with this email" });
        } else {
          auth.save((err, data) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
            } else {
              let fortoken = {
                _id: data._id,
                email: data.email,
              };
              const token = jwt.sign(fortoken, "secretkey");
              res
                .status(200)
                .json({ message: "SignUp Successful", token: token });
              console.log(data);
            }
          });
        }
      }
    } else {
      res
        .status(422)
        .send({ status: "ERROR", message: "Phone is not valid.. " });
    }
  } else {
    res.status(422).send({ status: "ERROR", message: "Email is not valid.. " });
  }
};

exports.login = async (req, res) => {
  let auth = new Auth({
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    status: req.body.status,
    statusMsg: req.body.statusMsg,
    storeId: req.body.storeId,
    role: req.body.role
  });

  if (!(auth.email && auth.password)) {
    return res.status(400).send({ error: "Please enter all values" });
  }

  const user = await Auth.findOne({ email: auth.email });
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(auth.password, user.password);
    if (validPassword) {
      let data = {
        user_id: user._id,
        email: user.email,
        phone: user.phone,
        firstName: user.firstName,
        lastName: user.lastName,
        status: user.status,
        statusMsg: user.statusMsg,
        storeId: user.storeId,
        role: user.role
      };
      const token = jwt.sign(data, "secretkey");
      return res
        .status(200)
        .json({ message: "Login Successful", token: token });
    } else {
      console.log({ error: "Invalid Password" });
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    console.log({ error: "register first" });
    res.status(401).json({ error: "register first" });
  }
};

// exports.otpsend = (req, res) => {
//   let phone = req.body.phone;

//   if (!phone) {
//     return res.status(400).send({ error: "Please enter all values" });
//   }
//   sendOtp.send(phone, "1234", (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(data);
//     }
//   });
// };

// exports.resend_otp = (req, res) => {
//   let phone = req.body.phone;

//   if (!phone) {
//     return res.status(400).send({ error: "Please enter all values" });
//   }
//   sendOtp.retry(phone, false, (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(data);
//     }
//   });
// };

exports.forgot_password = async (req, res) => {
  let auth = new Auth({
    phone: req.body.phone,
  });

  const a = await Auth.findOne({ phone: auth.phone });
  if (a) {
    let Otp = func.generate(4);
    console.log("Otp", Otp);
    const b = await Auth.findOneAndUpdate(
      { phone: auth.phone },
      { $set: { otp: Otp } },
      {
        projection: {
          _id: 0,
          name: 0,
          email: 0,
          phone: 0,
          __v: 0,
          password: 0,
        },
      }
    );
    res.status(200).send(Otp);
    console.log("otp:", Otp);
  } else {
    return res.status(400).send({ error: "user not found" });
  }

};

// exports.verify_otp = async (req, res) => {
//   let auth = new Auth({
//     phone: req.body.phone,
//     otp: req.body.otp,
//   });

//   if (!(auth.phone && auth.otp)) {
//     return res.status(400).send({ error: "Please enter all values" });
//   }

//   const a = await Auth.findOne({ phone: auth.phone, otp: auth.otp });
//   if (a) {
//     res.status(200).send("verification success");
//     console.log("verification success");
//   } else {
//     return res.status(400).send({ error: "verification fail" });
//   }
// };

exports.reset_password = async (req, res) => {
  let auth = ({
    new_password: req.body.new_password,
    confirm_password: req.body.confirm_password
  })

  // if (!(auth.new_password && auth.confirm_password)) {
  //   return res.status(400).send({ error: "Please enter all values" });
  // }

  if (auth.new_password !== auth.confirm_password) {
    return res.status(400).send({ error: "check both password are not equal" });
  } else {
    const salt = await bcrypt.genSalt(9);
    const b = await bcrypt.hash(auth.confirm_password, salt);
    const a = await Auth.findByIdAndUpdate(req.userDetails.user_id, { password: b })
    res.status(200).send("your password updated");
    console.log(a);
  }

}


exports.change_password = async (req, res) => {
  let a = req.userDetails.user_id;
  let password = req.body.old_password;

  const b = await Auth.findById(a, {
    _id: 0,
    name: 0,
    phone: 0,
    email: 0,
    __v: 0,
  });
  const c = await bcrypt.compare(password, b.password);
  if (c) {
    const auth = new Auth({
      password: req.body.new_password,
    });

    if (!auth.password) {
      return res.status(400).send({ error: "Please enter all values" });
    }
    var salt = await bcrypt.genSalt(9);
    auth.password = await bcrypt.hash(auth.password, salt);
    Auth.findByIdAndUpdate(
      req.userDetails.user_id,
      { password: auth.password },
      (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          console.log(data);
          res.status(200).send(data);
        }
      }
    );
  } else {
    return res.status(400).send({ error: "old password is wrong" });
  }
};

exports.change_userDetails = async (req, res) => {
  let userId = req.userDetails._id;
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: "Please enter atleast one values" });
  }

  console.log(req.body);
  Auth.findOneAndUpdate({ _id: userId }, { $set: req.body }, { useFindAndModify: false }, (err, data) => {
    if (data) {
      let datas = {
        user_id: data._id,
        email: data.email,
        phone: data.phone,
        firstName: data.firstName,
        lastName: data.lastName,
        status: data.status,
        statusMsg: data.statusMsg,
        storeId: data.storeId,
        role: data.role
      };
      const token = jwt.sign(datas, "secretkey");

      return res.status(200).json({ message: "Updated Successful", token: token });
    } else {
      console.log("err", err);
      return res.status(500).send(err);
    }

  })
}



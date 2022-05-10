const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware

    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.send(err);
      } else {
        req.userDetails = authData;
        // res.send(authData)
        next();
      }
    });
  } else {
    // Forbidden
    res.status(403).send("token not provided");
  }
};

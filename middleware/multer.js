const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./upload/profile",
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".");
    const fname = ext[0] + "." + ext[1];
    cb(null, fname);
  },
});

// store profile and filesize

module.exports = up = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

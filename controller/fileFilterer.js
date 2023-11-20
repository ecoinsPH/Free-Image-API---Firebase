const fileFilterer = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/heic"
  ) {
    cb(null, true);
  } else {
    req.fileValidationError =
      "Invalid file type. Only JPEG, PNG, and HEIC files are allowed.";
    cb(null, false);
  }
};

export default fileFilterer;

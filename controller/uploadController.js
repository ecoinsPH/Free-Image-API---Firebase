import UploadHandler from "../service/uploadService.js";
import dotenv from "dotenv";
dotenv.config();

const uploadController = (req, res) => {
  const key = req.body.key;

  if (key !== process.env.PARAMS_KEY) {
    console.log("Unauthorized Upload");
    res.status(401).send("Invalid key :P");
    return;
  }

  const file = req.file;

  if (req.fileValidationError) {
    res.status(415).send(req.fileValidationError);
    return;
  }

  if (!file) {
    res.status(404).send("No file uploaded. Image should be in formData.image");
    return;
  }

  UploadHandler(file, "public")
    .then((imageUrl) => {
      console.log("New Upload!");
      res.status(200).json({ image: imageUrl, author: "Tyler Bert" });
    })
    .catch((error) => {
      console.log("Failed Upload");
      res.status(500).send(`Error uploading file: ${error.message}`);
    });
};

export default uploadController;

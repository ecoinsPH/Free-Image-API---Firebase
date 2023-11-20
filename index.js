import express from "express";
import multer from "multer";
import cors from "cors";
import uploadController from "./controller/uploadController.js";
import fileFilterer from "./controller/fileFilterer.js";
import uptimeRobotController from "./controller/uptimeRobotController.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS for all origins

const upload = multer({
  fileFilter: fileFilterer,
});

app.post("/upload", upload.single("image"), uploadController);
app.head("/", uptimeRobotController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

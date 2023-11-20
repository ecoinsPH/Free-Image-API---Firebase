import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig.js";
import { v4 } from "uuid";

const UploadHandler = (imageUpload, path) => {
  return new Promise((resolve, reject) => {
    if (imageUpload == null) {
      reject("No image selected.");
      return;
    }

    const imageRef = ref(storage, `${path}/${v4() + imageUpload.originalname}`);
    uploadBytes(imageRef, imageUpload.buffer)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            resolve(url);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default UploadHandler;

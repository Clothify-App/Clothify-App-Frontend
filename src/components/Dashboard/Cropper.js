import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import usersServices from "../../Services/users.services";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
const Cropper = ({ setimgURL }) => {
  const { userID } = useAuth();

  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({
    unit: "px",
    aspect: 5 / 7,
    width: 300,
    height: 480,
  });
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);

  const selectImage = (file) => {
    setSrc(URL.createObjectURL(file));
  };

  const closeModal = () => {
    var close = document.getElementById("close");
    // console.log(close);
    close.click();
  };

  const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  const handleImageUploading = async (handleSubmit) => {
    // console.log(output);
    const content_type = output.split(";")[0].split(":")[1];
    const base64 = output.split(";")[1].split(",")[1];
    const blob = b64toBlob(base64, content_type);
    let body = new FormData();
    body.set("key", "9f4aaf55f9d26955db31cfc61a79eb6b");
    body.append("image", blob);
    await axios
      .post("https://api.imgbb.com/1/upload", body)
      .then(async (Response) => {
        let image = Response.data.data.display_url;
        await usersServices.UpdateUser(userID, { image: image });
        setimgURL(image);
        closeModal();
      })
      .catch((error) => {
        console.log(`Unable to upload image..`, error);
      });
  };

  const cropImageNow = () => {
    console.log(image);
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // Converting to base64
    const base64Image = canvas.toDataURL("image/jpeg");
    setOutput(base64Image);
  };

  const handleImageLoad = (event) => {
    setImage(event.target);
  };

  return (
    <div className="App w-full h-full p-3">
      <center className="flex relative min-h-[60vh]">
        <div className="container flex-[0.5]">
          <input
            required
            type="file"
            accept="image/*"
            id="imageIP"
            onChange={(e) => {
              selectImage(e.target.files[0]);
            }}
            style={{ display: "none" }}
          />
          <button
            onClick={() => document.getElementById("imageIP").click()}
            className="border-2 border-black px-4 py-2 text-white text-bold rounded-md bg-black"
          >
            Select Image
          </button>
          <br />
          <br />
          <div>
            {src && (
              <div>
                <ReactCrop
                  src={src}
                  aspect={5 / 7}
                  maxHeight={480}
                  maxWidth={300}
                  crop={crop}
                  onChange={(crop) => setCrop(crop)}
                >
                  <img
                    src={src}
                    alt="productImage"
                    onLoad={handleImageLoad}
                    className=""
                  />
                </ReactCrop>
                <br />
                <button
                  onClick={cropImageNow}
                  className="p-2 bg-blue-900 text-white px-3 rounded"
                >
                  Crop
                </button>
                <br />
                <br />
              </div>
            )}
          </div>
        </div>
        <div className="flex-[0.5] flex flex-col justify-between items-center">
          <h3 className="mb-7 text-center font-bold opacity-70">
            Cropped Image:
          </h3>
          {output && <img src={output} className="" alt="productImage" />}
          <div className="uploadSection flex-1 flex justify-center items-center">
            <div className="container max-w-[200px] flex m-auto">
              <button
                className="p-2 border-black border-2 rounded-md mt-5 bg-black text-white"
                onClick={handleImageUploading}
              >
                upload Image
              </button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Cropper;

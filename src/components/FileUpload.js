import React, { useState, useRef } from "react";
import "./style.css";
import axios from "axios";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/jpg",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleUploadButtonClick = () => {
    if (image) {
      const labelElement = document.getElementById('label');
      labelElement.innerHTML = "Tunggu Sebentar";

      console.log("masih jalan");
      const data = new FormData();
      data.append('file', image);

      axios
        .post("http://rbroqg-ip-103-134-154-192.tunnelmole.net/predict", data)
        .then((response) => {
          const result = response.data; 
          console.log(result);
          labelElement.innerHTML = `Hasil: ${JSON.stringify(result)}`;
          
          const reader = new FileReader();
          if (result == "Gambar Asli" || result == "Gambar Deepfake"){
            reader.onload = function(e) {
            const existingData = JSON.parse(localStorage.getItem('imageLabelPairs')) || [];
            existingData.push({ image: e.target.result, label: result });
            localStorage.setItem('imageLabelPairs', JSON.stringify(existingData));
            }
          };
          reader.readAsDataURL(image);
        })
        .catch((error) => {
          console.error("error: ", error);
        });
    }
  };

  return (
    <div className="image-upload-container">
      <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
          {image ? image.name : "Choose an image"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
          ) : (
            <img src="" alt="upload image" className="img-display-before" />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        <button
          className="image-upload-button"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>

        <div style={{marginTop: 10, fontSize: 20, fontWeight: "bold"}}>
            <div className="result" id="label"></div>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
import axios from "axios";
import React from "react";

export default function Image() {
  function getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error:", error);
    };
  }

  let base64image = "";
  //   getBase64(file, (result) => {
  //     base64image = result;
  //   });

  let base64file = "";
  console.log(base64image);
  return (
    <div>
      <input
        type="file"
        name="file"
        id="image"
        onChange={(e) => {
          console.log(e.target.files);
          let file = e.target.files[0];
          getBase64(file, (result) => {
            base64file = result;
            console.log(base64file);
          });
        }}
      />
      <button
        onClick={async () => {
          let formdata = new FormData();
          formdata.append("key", "147ac6844f677983b593f4e969db69a6");
          formdata.append("image", toString(base64file));

          //   let result = await axios({
          //     method: "post",
          //     url: "https://api.imgbb.com/1/upload",
          //     data: body,
          //     headers: {
          //       Accept: "application/json",
          //       // 'Access-Control-Allow-Origin': 'null',
          //       Connection: "keep-alive",
          //       "Content-Type": "multipart/form-data",
          //     },
          //   });

          var url = "https://api.imgbb.com/1/upload";
          const config = {
            method: "POST",
            headers: {
              Accept: "application/json",
              // 'Access-Control-Allow-Origin': 'null',
              Connection: "keep-alive",
              "Content-Type": "multipart/form-data",
            },
            body: formdata,
          };

          const response = await fetch(url, config);
          const json = await response.json();

          console.log(response);
          console.log(json);

          //   console.log(result);
        }}
      >
        GetBase64
      </button>
    </div>
  );
}

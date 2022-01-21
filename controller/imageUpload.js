const imgUploader = require("imgbb-uploader");
require("dotenv").config();

const imgUpload = async (path) => {
  let url = await imgUploader(process.env.IMG_UPLOAD_KEY, path)
    .then((response) => {
        let data = response;
      console.log(response);
      return data.image.url;
    })
    .catch((error) => console.error(error));

    return url;
};

module.exports = imgUpload;
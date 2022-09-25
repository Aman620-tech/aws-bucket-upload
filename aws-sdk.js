const AWS = require("aws-sdk");
// s3 activate
let S3 = new AWS.S3({
  accessKeyId: "XXXXXX",
  secretAccessKey: "XXXXXXXXXXX",
});

//  s3 service define

let uploadS3 = async (fileContent, fileName) => {
  const params = {
    Bucket: "XXXXXX",
    Key: fileName,
    Body: fileContent,
  };
  //

  const uploadFile = await S3.upload(params).promise();

  return uploadFile;
};

module.exports = { uploadS3 };

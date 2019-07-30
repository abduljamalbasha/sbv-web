import { Injectable } from "@angular/core";

import * as AWS from "aws-sdk/global";
import * as S3 from "aws-sdk/clients/s3";

@Injectable({
  providedIn: "root"
})
export class UploadService {
  constructor() {}

  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: "", //Update your access key id here
      secretAccessKey: "", //update security access key id here
      region: "" //update you region here
    });
    const params = {
      Bucket: "sbvdemo",
      Key: file.name,
      Body: file,
      ACL: "public-read",
      ContentType: contentType
    };
    bucket.upload(params, function(err, data) {
      if (err) {
        console.log("There was an error uploading your file: ", err);
        return false;
      }
      console.log("Successfully uploaded file.", data);
      return true;
    });
  }
}

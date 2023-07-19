import { S3Client, PutObjectCommand, GetObjectCommand, PutObjectCommandInput, GetObjectCommandInput, GetObjectCommandOutput, AbortMultipartUploadCommandOutput, CompleteMultipartUploadCommandOutput } from "@aws-sdk/client-s3";
import {Upload } from "@aws-sdk/lib-storage";
type UploadedObjectRes = {
  signedRequest: {
    Location: string;
  };
};

class S3Singleton {
  private static instance: S3Singleton | null = null;
  private s3Client: S3Client;

  private constructor() {
    const s3Config = {
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
      },
      region: process.env.AWS_REGION || "",
    };
    this.s3Client = new S3Client(s3Config);
  }

  public static getInstance(): S3Singleton {
    if (!S3Singleton.instance) {
      S3Singleton.instance = new S3Singleton();
    }
    return S3Singleton.instance;
  }

  public async uploadObject(params: PutObjectCommandInput):Promise<AbortMultipartUploadCommandOutput | CompleteMultipartUploadCommandOutput>{
    try {
      const upload = new Upload({
        client: this.s3Client,
        params,
      });
      const data = upload.done();
      return data;
    } catch (err) {
      throw err;
    }
  }

  public async getObject(params: GetObjectCommandInput): Promise<GetObjectCommandOutput> {
    try {
      return await this.s3Client.send(new GetObjectCommand(params));
    } catch (err) {
      throw err;
    }
  }
}

export default S3Singleton;

import { S3Client, PutObjectCommand, GetObjectCommand, PutObjectCommandInput, GetObjectCommandInput, GetObjectCommandOutput } from "@aws-sdk/client-s3";

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

  public async uploadObject(params: PutObjectCommandInput): Promise<UploadedObjectRes> {
    return new Promise((resolve, reject) => {
      this.s3Client.send(new PutObjectCommand(params), (err: any, data: any) => {
        if (err) {
          reject(err);
        }
        const returnData: UploadedObjectRes = {
          signedRequest: {
            Location: data.Location,
          },
        };
        resolve(returnData);
      });
    });
  }

  public async getObject(params: GetObjectCommandInput): Promise<GetObjectCommandOutput> {
    return this.s3Client.send(new GetObjectCommand(params));
  }
}

export default S3Singleton;

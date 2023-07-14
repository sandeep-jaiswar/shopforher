import S3 from 'aws-sdk/clients/S3';

type UploadedObjectRes = {
  signedRequest : {
    Location : string
  }
}

class S3Singleton {
  private static instance: S3Singleton | null = null;
  private s3Client: S3;

  private constructor() {
    const s3Config: S3.ClientConfiguration = {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    };
    this.s3Client = new S3(s3Config);
  }

  public static getInstance(): S3Singleton {
    if (!S3Singleton.instance) {
      S3Singleton.instance = new S3Singleton();
    }
    return S3Singleton.instance;
  }

  public async uploadObject(params: S3.PutObjectRequest) : Promise<UploadedObjectRes>{
    return new Promise((resolve, reject) => {
      this.s3Client.upload(params,(err: any, data: any)=>{
        if (err) {
          reject(err);
        }
        const returnData = {
          signedRequest: data
        };
        resolve(returnData);
      })
    });
  }

  public async getObject(params: S3.GetObjectRequest) {
    const data = await this.s3Client.getObject(params);
    return data
  }
}

export default S3Singleton;

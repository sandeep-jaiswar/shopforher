import mime from "mime";
import { NextRequest, NextResponse } from "next/server";
import S3Singleton from "@/lib/s3";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const file = formData.get("file") as Blob | null;
  if (!file) {
    return NextResponse.json(
      { error: "File blob is required." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${file.name.replace(
      /\.[^/.]+$/,
      ""
    )}-${uniqueSuffix}.${mime.getExtension(file.type)}`;

    const params = {
      Bucket: "genericapi",
      Key: filename,
      Body: buffer,
      ACL: "public-read",
      ContentType: "image/jpg, image/png, image/jpeg",
    };

    const data: any = await S3Singleton.getInstance().uploadObject(
      params
    );
    const uploadedImage = await prisma.image.create({
      data: {
        src: data?.Location,
        alt: filename,
      },
    });
    return NextResponse.json({
      status: "success",
      data: uploadedImage,
    });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const img = await prisma.image.findMany();

  if (!img) {
    let error_response = {
      status: "fail",
      message: "No Feedback with the Provided ID Found",
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  let json_response = {
    status: "success",
    data: {
      image: img,
    },
  };
  return NextResponse.json(json_response);
}

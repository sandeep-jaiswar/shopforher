import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const feedback = await prisma.product.findMany();

  if (!feedback) {
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
      product: feedback,
    },
  };
  return NextResponse.json(json_response);
}

export async function POST(request: Request) {
  let json = await request.json();
  const feedback = await prisma.product.create({
    data: json
  });

  if (!feedback) {
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
      product: feedback,
    },
  };
  return NextResponse.json(json_response);
}

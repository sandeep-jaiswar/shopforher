import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const result = await prisma.category.findMany();

  if (!result) {
    let error_response = {
      status: "fail",
      message: "No result with the Provided ID Found",
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  let json_response = {
    status: "success",
    data: result,
  };
  return NextResponse.json(json_response);
}

export async function POST(request: Request) {
  let json = await request.json();
  const result = await prisma.category.create({
    data: json
  });

  if (!result) {
    let error_response = {
      status: "fail",
      message: "No result with the Provided ID Found",
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  let json_response = {
    status: "success",
    data: {
      category: result,
    },
  };
  return NextResponse.json(json_response);
}

// // for NEXT JS
// export function GET(){
//     // DATABASE LOGIC   
//     return Response.json({
//         email: "yashbansal4214@gmail.com",
//         name: "coolassboy"
//     })
// }
// export function POST(){
//     // DATABASE LOGIC   
//     return Response.json({
//         email: "yashbansal42dfgsd14@gmail.com",
//         name: "coolassboy"
//     })
// }

// // app.get("/api/user", (req, res) => {
// //     res.json({
// //         email: "sjkld;faskl;fas",
// //         name: "asfasdf"
// //     })
// // })
// // This is how we used to do in REACT Js 

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

// Initialize Prisma Client
const prisma = new PrismaClient();

// Define Zod schema for validation
const userSchema = z.object({
  userName: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedBody = userSchema.parse(body);
    const newUser = await prisma.user.create({
      data: {
        username: parsedBody.userName,
        password: parsedBody.password,
      },
    });
    return NextResponse.json({
      message: "User created successfully",
      user: { id: newUser.id, username: newUser.username },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  console.log("Received GET request");

  try {
    // Fetch the first user from the database
    const user = await prisma.user.findFirst();

    // Log the retrieved user for debugging
    console.log("Fetched user:", user);

    if (!user) {
      console.log("No user found");
      return NextResponse.json({
        message: "No user found",
        userName: null
      });
    }

    return NextResponse.json({
      message: "User fetched successfully",
      userName: user.username
    });
  } catch (error) {
    // Log the error details for debugging
    console.error("Error fetching user:", error);

    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
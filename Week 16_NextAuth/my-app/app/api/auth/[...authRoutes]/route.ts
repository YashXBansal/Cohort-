import { Condiment } from "next/font/google";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, args: any){
    console.log(args.params.authRoutes);
    return NextResponse.json({
        msg: "I said Let Me Cook"
    })
}

// this route will handle all those request coming to /api/auth/...... (Literally anything)

// You can create POST and other's too
 
import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb"

export async function GET(request:Request){

    const data = await prismadb.post.findMany();
    return NextResponse.json(data);
}

export async function POST(request:Request){
    const res = await request.json();

    try {
        await prismadb.post.createMany({
            data:{
                title:res.title,
                content:res.content
            }
        });

        return NextResponse.json("Data has been created",{
            status:201,
            statusText:"OK"
        })
    } catch (error) {
        return NextResponse.json(error);
    }
}
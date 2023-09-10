import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb"

export async function GET(request:Request, {params}:{params:{id:string}}){

    try {
        const data = await prismadb.post.findUniqueOrThrow({
            where:{
                id:params.id
            }
        });

        
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error)
    }
}
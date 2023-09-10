import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function PATCH(request:Request,{params}:{params:{id:string}}){

    try {
        const req = await request.json();
        await prismadb.post.update({
            where:{
                id:params.id
            },
            data:{
                "title": req.title,
                "content":req.content
            }
        });

        return NextResponse.json("Data has been updated",{
            status:200,
            statusText:"OK"
        })
    } catch (error) {
        return NextResponse.json(error)
    }
}
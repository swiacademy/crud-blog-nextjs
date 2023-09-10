import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function DELETE(request:Request, {params}:{params:{id:string}}){
    try {
        const data = await prismadb.post.delete({
            where:{
                id:params.id
            }
        });

        return NextResponse.json("Data has been deleted",{
            status:200,
            statusText:"OK"
        })
    } catch (error) {
        return NextResponse.json(error)
    }
}
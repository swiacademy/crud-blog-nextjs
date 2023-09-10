import { PrismaClient } from "@prisma/client";

let client:any

if(process.env.NODE_ENV === 'production') {
  client = new PrismaClient()
}else{
  if(!global.prismadb){
    global.prismadb = new PrismaClient()
  }
  client = global.prismadb
}

export default client
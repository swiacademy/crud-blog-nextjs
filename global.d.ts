import { PrismaClient } from "@prisma/client";
declare global {
    var prismadb: PrismaClient; // This must be a `var` and not a `let / const`
}


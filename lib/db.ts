//@ts-nocheck
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

import { PrismaClient } from "@prisma/client";
import { DB_DATABASE_URL } from "../config";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
  datasources: {
    db: {
      url: "postgresql://privateSales:123456@172.31.33.255:5436/privateSales_DB?schema=public",
    },
  },
});

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  prisma: prisma,
};

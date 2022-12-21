import { PrismaClient } from "@prisma/client";
import { DB_DATABASE_URL } from "../config";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
  datasources: {
    db: {
      url: DB_DATABASE_URL,
    },
  },
});

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  prisma: prisma,
};

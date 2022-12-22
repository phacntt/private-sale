import { PrismaClient } from "@prisma/client";
import {  HOST, NODE_ENV } from "../config";

const host = NODE_ENV === 'development' ? 'localhost' : HOST

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
  datasources: {
    db: {
      url: `postgresql://privateSales:123456@${host}:5432/privateSales_DB?schema=public`,
    },
  },
});

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  prisma: prisma,
};

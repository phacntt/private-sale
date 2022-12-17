import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
    datasources: {
      db: {
        url: process.env.POSTGRES_URL
      }
    }
})

export interface Context {
  prisma: PrismaClient
}

export const context: Context = {
  prisma: prisma,
}
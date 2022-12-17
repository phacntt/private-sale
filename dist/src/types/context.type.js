"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
    datasources: {
        db: {
            url: process.env.POSTGRES_URL
        }
    }
});
exports.context = {
    prisma: prisma,
};
//# sourceMappingURL=context.type.js.map
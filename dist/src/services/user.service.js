"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const HttpException_1 = require("../exception/HttpException");
const isEmpty_1 = require("../utils/isEmpty");
const prisma = new client_1.PrismaClient();
class UserService {
    async getUsers() {
        const users = await prisma.user.findMany();
        if (!users)
            throw new HttpException_1.HttpException(409, "You're not user");
        return users;
    }
    async findUserById(userId) {
        if ((0, isEmpty_1.isEmpty)(userId))
            throw new HttpException_1.HttpException(409, "You not permision");
        const findUser = await prisma.user.findUnique({ where: { id: userId }, include: { posts: true } });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "You're not user");
        return findUser;
    }
    async findUserByEmail(email) {
        if ((0, isEmpty_1.isEmpty)(email))
            throw new HttpException_1.HttpException(409, "You're email not found!! Please check again");
        const findUser = await prisma.user.findUnique({ where: { email } });
        return findUser;
    }
    async createUser(userData) {
        if ((0, isEmpty_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "You're not userData");
        const findUser = await prisma.user.findUnique({ where: { email: userData.email } });
        if (findUser)
            throw new HttpException_1.HttpException(400, `You're email ${userData.email} already exists`);
        const createUserData = await prisma.user.create({ data: userData });
        return createUserData;
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map
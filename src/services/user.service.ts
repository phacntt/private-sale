import { PrismaClient } from "@prisma/client";
import { HttpException } from "../exception/HttpException";
import { isEmpty } from "../utils/isEmpty";
import { CreateUserDto } from "../dtos/user.dto";
import { DB_DATABASE_URL } from "../config";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DB_DATABASE_URL
    }
  }
});

class UserService {
  public async getUsers() {
    const users = await prisma.user.findMany();
    if (!users) throw new HttpException(409, "You're not user");

    return users;
  }

  public async findUserById(userId: number) {
    if (isEmpty(userId)) throw new HttpException(409, "You not permision");

    const findUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { posts: true },
    });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async findUserByEmail(email: string) {
    if (isEmpty(email))
      throw new HttpException(
        409,
        "You're email not found!! Please check again"
      );

    const findUser = await prisma.user.findUnique({ where: { email } });

    return findUser;
  }

  public async createUser(userData: CreateUserDto) {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });
    if (findUser)
      throw new HttpException(
        400,
        `You're email ${userData.email} already exists`
      );

    const createUserData = await prisma.user.create({ data: userData });

    return createUserData;
  }
}

export default UserService;

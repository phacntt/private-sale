import { HttpException } from "../exception/HttpException";
import { isEmpty } from "../utils/isEmpty";
import { context } from "../types/context.type";

class AccountService {
  public clients = context
  public async getAccounts() {
    const accounts = await this.clients.prisma.account.findMany();
    if (!accounts) throw new HttpException(409, "You're not user");
    console.log()
    return accounts;
  }
}

export default AccountService;

import { Request, Response, NextFunction } from "express";
import { CreateUserDto } from "../dtos/user.dto";
import { HttpException } from "../exception/HttpException";
import { isEmpty } from "../utils/isEmpty";
import PostService from "../services/post.service";
import { CreatePostDto } from "../dtos/post.dto";
import AccountService from "../services/account.service";

class AccountController {
    public accountService = new AccountService()

    public getAccounts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const findAllUsersData = await this.accountService.getAccounts();

            res.status(200).json({ data: findAllUsersData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };
}

export default AccountController
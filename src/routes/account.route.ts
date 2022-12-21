import { Router } from "express";
import AccountController from "../controllers/account.controller";

class AccountRoute {
    public path = '/accounts';
    public router = Router();
    public accountController = new AccountController();

    constructor() {
        this.initializeRoutes();
    }
    
    private initializeRoutes() {
        this.router.get(`/`, this.accountController.getAccounts);
    }
}

export default AccountRoute
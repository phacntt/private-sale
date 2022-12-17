"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
const HttpException_1 = require("../exception/HttpException");
const isEmpty_1 = require("../utils/isEmpty");
class UserController {
    constructor() {
        this.userService = new user_service_1.default();
        this.getUsers = async (req, res, next) => {
            try {
                const findAllUsersData = await this.userService.getUsers();
                res.status(200).json({ data: findAllUsersData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getUsersById = async (req, res, next) => {
            try {
                const userId = Number(req.params.id);
                const findAllUsersData = await this.userService.findUserById(userId);
                res.status(200).json({ data: findAllUsersData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createUser = async (req, res, next) => {
            try {
                const data = req.body;
                console.log(data);
                if ((0, isEmpty_1.isEmpty)(data))
                    throw new HttpException_1.HttpException(409, "Not found");
                const createUser = await this.userService.createUser(data);
                res.status(200).json({ data: createUser, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=user.cotroller.js.map
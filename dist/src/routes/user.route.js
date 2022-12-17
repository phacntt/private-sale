"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_cotroller_1 = __importDefault(require("../controllers/user.cotroller"));
class UserRoute {
    constructor() {
        this.path = '/users';
        this.router = (0, express_1.Router)();
        this.userController = new user_cotroller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`/`, this.userController.getUsers);
        this.router.get(`/:id(\\d+)`, this.userController.getUsersById);
        this.router.post(``, this.userController.createUser);
    }
}
exports.default = UserRoute;
//# sourceMappingURL=user.route.js.map
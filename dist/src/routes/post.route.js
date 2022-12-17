"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
class PostRoute {
    constructor() {
        this.path = '/posts';
        this.router = (0, express_1.Router)();
        this.postController = new post_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`/`, this.postController.getPosts);
        this.router.get(`/:id(\\d+)`, this.postController.getPostById);
        this.router.get(`/user/:userId(\\d+)`, this.postController.getPostByUserId);
        this.router.post(``, this.postController.createPost);
        // this.router.put(`/:id(\\d+)`, this.userController.updateBook);
        // this.router.delete(`/:id(\\d+)`, this.userController.deleteBook);
    }
}
exports.default = PostRoute;
//# sourceMappingURL=post.route.js.map
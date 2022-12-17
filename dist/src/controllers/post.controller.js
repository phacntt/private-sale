"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("../exception/HttpException");
const isEmpty_1 = require("../utils/isEmpty");
const post_service_1 = __importDefault(require("../services/post.service"));
class PostController {
    constructor() {
        this.postService = new post_service_1.default();
        this.getPosts = async (req, res, next) => {
            try {
                const findAllUsersData = await this.postService.getPosts();
                res.status(200).json({ data: findAllUsersData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getPostById = async (req, res, next) => {
            try {
                const id = Number(req.params.id);
                const findPostData = await this.postService.findPostById(id);
                res.status(200).json({ data: findPostData, message: 'find post ok' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getPostByUserId = async (req, res, next) => {
            try {
                const userId = Number(req.params.userId);
                const findPostData = await this.postService.findPostByUserId(userId);
                res.status(200).json({ data: findPostData, message: 'find post ok' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createPost = async (req, res, next) => {
            try {
                const data = req.body;
                console.log(data);
                if ((0, isEmpty_1.isEmpty)(data))
                    throw new HttpException_1.HttpException(409, "Not found");
                const createPost = await this.postService.createPost(data);
                res.status(200).json({ data: createPost, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = PostController;
//# sourceMappingURL=post.controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const HttpException_1 = require("../exception/HttpException");
const isEmpty_1 = require("../utils/isEmpty");
const prisma = new client_1.PrismaClient();
class PostService {
    async getPosts() {
        const posts = await prisma.post.findMany();
        if (!posts)
            throw new HttpException_1.HttpException(409, "You're not permision");
        return posts;
    }
    async findPostById(id) {
        if ((0, isEmpty_1.isEmpty)(id))
            throw new HttpException_1.HttpException(409, "Post doesn't exists!!");
        const findPost = await prisma.post.findUnique({ where: { id: id } });
        if (!findPost)
            throw new HttpException_1.HttpException(409, "Post doesn't exists!!");
        const authorId = findPost === null || findPost === void 0 ? void 0 : findPost.authorId;
        const infoAuthor = await prisma.user.findUnique({ where: { id: Number(authorId) } });
        findPost.author = infoAuthor;
        if (!infoAuthor)
            throw new HttpException_1.HttpException(409, "Not found author");
        return findPost;
    }
    async findPostByUserId(userId) {
        if ((0, isEmpty_1.isEmpty)(userId))
            throw new HttpException_1.HttpException(409, "You not permision");
        const findUser = await prisma.user.findUnique({ where: { id: userId } });
        const findPostByUser = await prisma.post.findMany({ where: { authorId: userId } });
        console.log(findPostByUser);
        if (!findPostByUser)
            throw new HttpException_1.HttpException(409, "You're not user");
        return findPostByUser;
    }
    async createPost(postData) {
        if ((0, isEmpty_1.isEmpty)(postData))
            throw new HttpException_1.HttpException(400, "You're not postData");
        const findPost = await prisma.post.findFirst({ where: { title: postData.title } });
        if (findPost)
            throw new HttpException_1.HttpException(400, `You're post ${postData.title} already exists`);
        // if (findUser) throw new HttpException(400, `You're email ${postData.email} already exists`);
        const createPostData = await prisma.post.create({ data: postData });
        return createPostData;
    }
}
exports.default = PostService;
//# sourceMappingURL=post.service.js.map
import { Request, Response, NextFunction } from "express";
import { CreateUserDto } from "../dtos/user.dto";
import { HttpException } from "../exception/HttpException";
import { isEmpty } from "../utils/isEmpty";
import PostService from "../services/post.service";
import { CreatePostDto } from "../dtos/post.dto";

class PostController {
    public postService = new PostService()

    public getPosts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const findAllUsersData = await this.postService.getPosts();

            res.status(200).json({ data: findAllUsersData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getPostById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = Number(req.params.id);
            const findPostData = await this.postService.findPostById(id);

            res.status(200).json({ data: findPostData, message: 'find post ok' });
        } catch (error) {
            next(error);
        }
    };


    public getPostByUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = Number(req.params.userId);
            const findPostData = await this.postService.findPostByUserId(userId);

            res.status(200).json({ data: findPostData, message: 'find post ok' });
        } catch (error) {
            next(error);
        }
    };

    public createPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const data: CreatePostDto = req.body
            console.log(data)
            if (isEmpty(data)) throw new HttpException(409, "Not found")

            const createPost = await this.postService.createPost(data)

            res.status(200).json({ data: createPost, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };
}

export default PostController
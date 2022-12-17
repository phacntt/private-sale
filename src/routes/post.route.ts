import { Router } from "express";
import PostController from "../controllers/post.controller";

class PostRoute {
    public path = '/posts';
    public router = Router();
    public postController = new PostController();

    constructor() {
        this.initializeRoutes();
    }
    
    private initializeRoutes() {
    this.router.get(`/`, this.postController.getPosts);
    this.router.get(`/:id(\\d+)`, this.postController.getPostById);
    this.router.get(`/user/:userId(\\d+)`, this.postController.getPostByUserId)
    this.router.post(``, this.postController.createPost);
    // this.router.put(`/:id(\\d+)`, this.userController.updateBook);
    // this.router.delete(`/:id(\\d+)`, this.userController.deleteBook);
    }
}

export default PostRoute
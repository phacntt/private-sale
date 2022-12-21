import { PrismaClient } from '@prisma/client'
import { HttpException } from "../exception/HttpException";
import { isEmpty } from "../utils/isEmpty";
import { CreateUserDto } from "../dtos/user.dto";
import { CreatePostDto } from "../dtos/post.dto";
import { DB_DATABASE_URL } from '../config';

const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
  });

class PostService {
    public async getPosts() {    
        const posts = await prisma.post.findMany()
        if (!posts) throw new HttpException(409, "You're not permision");
    
        return posts;
    }

    public async findPostById(id: number) {
        if (isEmpty(id)) throw new HttpException(409, "Post doesn't exists!!");
    
        const findPost = await prisma.post.findUnique({where: {id: id}, include: {author: true}})
        if (!findPost) throw new HttpException(409, "Post doesn't exists!!");

        return findPost;
    }

    public async findPostByUserId(userId: number) {
        if (isEmpty(userId)) throw new HttpException(409, "You not permision");
    
        const findUser = await prisma.user.findUnique({where: {id: userId}})

        const findPostByUser = await prisma.post.findMany({where: {authorId: userId}})
        console.log(findPostByUser)
        if (!findPostByUser) throw new HttpException(409, "You're not user");
    
        return findPostByUser;
    }

    public async createPost(postData: CreatePostDto) {
        if (isEmpty(postData)) throw new HttpException(400, "You're not postData");

        const findPost = await prisma.post.findFirst({where: {title: postData.title}})
        if (findPost) throw new HttpException(400, `You're post ${postData.title} already exists`);


        // if (findUser) throw new HttpException(400, `You're email ${postData.email} already exists`);

        const createPostData = await prisma.post.create({data: postData})

        return createPostData;
    }
}

export default PostService
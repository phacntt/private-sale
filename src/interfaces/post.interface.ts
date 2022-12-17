import { User } from "@prisma/client"

export interface Post {
    id: number,
    title: string,
    content?: string,
    published: boolean
    viewCount: number
    authorId: number
    author: User
}
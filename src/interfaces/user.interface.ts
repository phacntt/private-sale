import { Post } from "@prisma/client";

export interface User {
    id: number;
    name: string;
    email: string;
    post: Post[];
  }
  
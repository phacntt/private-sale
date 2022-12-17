import { IsBoolean, IsEmail, IsNumber, IsObject, IsString } from "class-validator";
import { CreateUserDto } from "./user.dto";

export class CreatePostDto {
  @IsString()
  public title: string
  
  @IsString()
  public content?: string

  @IsBoolean()
  public published: boolean

  @IsNumber()
  public viewCount: number

  @IsNumber()
  public authorId?: number
}
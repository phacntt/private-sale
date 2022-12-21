import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateAccountDto {
  @IsEmail()
  public email: string;

  @IsString()
  public name: string;
}
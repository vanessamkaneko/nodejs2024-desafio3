import { IsEmail, IsString } from 'class-validator';

export class AuthenticateOrgDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

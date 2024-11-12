import { IsEmail, IsString } from 'class-validator';

export class RegisterOrgDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  address: string;

  @IsString()
  whatsapp: string;
}

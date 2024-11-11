import { IsString } from 'class-validator';

export class RegisterOrgDto {
  @IsString()
  address: string;

  @IsString()
  whatsapp: string;
}

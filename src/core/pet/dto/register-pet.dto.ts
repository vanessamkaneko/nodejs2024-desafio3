import { IsString } from 'class-validator';

export enum PetSex {
  FEMALE = 'F',
  MALE = 'M',
}

export enum PetSpecie {
  CAT = 'cat',
  DOG = 'dog',
}

export class RegisterPetDto {
  @IsString()
  name: string;

  @IsString()
  age: string;

  @IsString()
  sex: PetSex;

  @IsString()
  specie: PetSpecie;

  @IsString()
  city: string;
}

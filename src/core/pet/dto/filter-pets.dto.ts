import { PetSex, PetSpecie } from './register-pet.dto';

export class FilterPetsDto {
  age?: string;
  sex?: PetSex;
  specie?: PetSpecie;
  city: string;
}

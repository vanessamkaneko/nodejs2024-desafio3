import { PetSex, PetSpecie, RegisterPetDto } from '../dto/register-pet.dto';

export class Pet {
  name: string;

  age: string;

  sex: PetSex;

  specie: PetSpecie;

  city: string;

  private constructor(payload: RegisterPetDto) {
    this.name = payload.name;
    this.age = payload.age;
    this.sex = payload.sex;
    this.specie = payload.specie;
    this.city = payload.city;
  }

  public static new(payload: RegisterPetDto) {
    const pet = new Pet(payload);
    return pet;
  }
}

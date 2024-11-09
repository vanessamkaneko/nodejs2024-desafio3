import { ListPetsDto } from 'src/core/pet/dto/list-pets.dto';
import { RegisterPetDto } from 'src/core/pet/dto/register-pet.dto';
import { Pet } from 'src/core/pet/entity/pet.entity';

export interface IPetGateway {
  registerPet(pet: RegisterPetDto): Promise<Pet>;
  findPetById(id: string): Promise<Pet | null>;
  findPetsByCity(query: ListPetsDto): Promise<Pet[] | null>;
}

export const IPetGateway = Symbol('IPetGateway');

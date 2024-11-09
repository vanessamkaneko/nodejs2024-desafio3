import { FilterPetsDto } from 'src/core/pet/dto/filter-pets.dto';
import { ListPetsDto } from 'src/core/pet/dto/list-pets.dto';
import { RegisterPetDto } from 'src/core/pet/dto/register-pet.dto';
import { Pet } from 'src/core/pet/entity/pet.entity';

export interface IPetMongoDbRepository {
  create(pet: RegisterPetDto): Promise<Pet>;
  findById(id: string): Promise<Pet | null>;
  findByCity(query: ListPetsDto): Promise<Pet[]>;
  filterPets(query: FilterPetsDto): Promise<Pet[]>;
}

export const IPetMongoDbRepository = Symbol('IPetMongoDbRepository');

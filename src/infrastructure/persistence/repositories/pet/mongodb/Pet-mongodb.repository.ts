import { Injectable } from '@nestjs/common';
import { IPetMongoDbRepository } from './IPet-mongodb.repository';
import { RegisterPetDto } from 'src/core/pet/dto/register-pet.dto';
import { Pet } from 'src/core/pet/entity/pet.entity';
import { PetModel } from 'src/infrastructure/persistence/bds/mongodb/schema/petModel';
import { ListPetsDto } from 'src/core/pet/dto/list-pets.dto';
import { FilterPetsDto } from 'src/core/pet/dto/filter-pets.dto';

@Injectable()
export class PetMongoDbRepository implements IPetMongoDbRepository {
  async create(pet: RegisterPetDto): Promise<Pet> {
    const registeredPet = await PetModel.create({ ...pet });

    await registeredPet.save();

    return registeredPet;
  }

  async findById(id: string): Promise<Pet | null> {
    const pet = await PetModel.findById(id);

    return pet;
  }

  async findByCity(query: ListPetsDto): Promise<Pet[]> {
    const pets = await PetModel.find(query);

    return pets;
  }

  async filterPets(query: FilterPetsDto): Promise<Pet[]> {
    const filteredPets = await PetModel.find(query);

    return filteredPets;
  }
}

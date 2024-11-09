import { Inject } from '@nestjs/common';
import { IPetGateway } from './IPetGateway';
import { RegisterPetDto } from 'src/core/pet/dto/register-pet.dto';
import { Pet } from 'src/core/pet/entity/pet.entity';
import { IPetMongoDbRepository } from 'src/infrastructure/persistence/repositories/pet/mongodb/IPet-mongodb.repository';
import { ListPetsDto } from 'src/core/pet/dto/list-pets.dto';
import { FilterPetsDto } from 'src/core/pet/dto/filter-pets.dto';

export class PetGateway implements IPetGateway {
  constructor(
    @Inject(IPetMongoDbRepository)
    private petRepository: IPetMongoDbRepository,
  ) {}

  async registerPet(pet: RegisterPetDto): Promise<Pet> {
    const registerPet = await this.petRepository.create(pet);

    return registerPet;
  }

  async findPetById(id: string): Promise<Pet | null> {
    const pet = await this.petRepository.findById(id);

    return pet;
  }

  async findPetsByCity(query: ListPetsDto): Promise<Pet[]> {
    const pet = await this.petRepository.findByCity(query);

    return pet;
  }

  async filterPets(query: FilterPetsDto): Promise<Pet[]> {
    const pets = await this.petRepository.filterPets(query);

    return pets;
  }
}

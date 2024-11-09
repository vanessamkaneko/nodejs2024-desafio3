import { Inject, Injectable } from '@nestjs/common';
import { IPetGateway } from 'src/application/operation/gateway/pet/IPetGateway';
import { ListPetsDto } from '../../dto/list-pets.dto';
import { Pet } from '../../entity/pet.entity';
import { PetNotFoundError } from '../errors/pet-not-found-error';

@Injectable()
export class ListPetsUseCase {
  constructor(
    @Inject(IPetGateway)
    private petGateway: IPetGateway,
  ) {}

  async execute(query: ListPetsDto): Promise<Pet[]> {
    const pets = await this.petGateway.findPetsByCity(query);
    console.log(pets);

    if (pets.length === 0) {
      throw new PetNotFoundError();
    }

    return pets;
  }
}

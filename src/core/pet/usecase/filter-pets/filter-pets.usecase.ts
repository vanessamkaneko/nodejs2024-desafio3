import { Inject, Injectable } from '@nestjs/common';
import { IPetGateway } from 'src/application/operation/gateway/pet/IPetGateway';
import { Pet } from '../../entity/pet.entity';
import { FilterPetsDto } from '../../dto/filter-pets.dto';

@Injectable()
export class FilterPetsUseCase {
  constructor(
    @Inject(IPetGateway)
    private petGateway: IPetGateway,
  ) {}

  async execute(query: FilterPetsDto): Promise<Pet[]> {
    const queryConditions: any = { city: query.city };

    if (query.age) {
      queryConditions.age = query.age;
    }

    if (query.sex) {
      queryConditions.sex = query.sex;
    }

    if (query.specie) {
      queryConditions.specie = query.specie;
    }

    const pets = await this.petGateway.filterPets(queryConditions);

    return pets;
  }
}

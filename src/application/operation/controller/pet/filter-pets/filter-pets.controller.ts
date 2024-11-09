import { Inject } from '@nestjs/common';
import { FilterPetsDto } from 'src/core/pet/dto/filter-pets.dto';
import { Pet } from 'src/core/pet/entity/pet.entity';
import { FilterPetsUseCase } from 'src/core/pet/usecase/filter-pets/filter-pets.usecase';

export class FilterPetsController {
  constructor(
    @Inject(FilterPetsUseCase)
    private filterPetsUseCase: FilterPetsUseCase,
  ) {}

  async handle(query: FilterPetsDto): Promise<Pet[]> {
    const filterPets = this.filterPetsUseCase.execute(query);

    return filterPets;
  }
}

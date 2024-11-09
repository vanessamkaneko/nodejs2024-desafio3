import { Inject } from '@nestjs/common';
import { ListPetsDto } from 'src/core/pet/dto/list-pets.dto';
import { Pet } from 'src/core/pet/entity/pet.entity';
import { ListPetsUseCase } from 'src/core/pet/usecase/list-pets/list-pets.usecase';

export class ListPetsController {
  constructor(
    @Inject(ListPetsUseCase)
    private listPetsUseCase: ListPetsUseCase,
  ) {}

  async handle(query: ListPetsDto): Promise<Pet[] | null> {
    const listPetsByCity = await this.listPetsUseCase.execute(query);

    return listPetsByCity;
  }
}

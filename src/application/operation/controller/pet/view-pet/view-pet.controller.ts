import { Inject } from '@nestjs/common';
import { Pet } from 'src/core/pet/entity/pet.entity';
import { ViewPetUseCase } from 'src/core/pet/usecase/view-pet/view-pet.usecase';

export class ViewPetController {
  constructor(
    @Inject(ViewPetUseCase)
    private viewPetUseCase: ViewPetUseCase,
  ) {}

  async handle(id: string): Promise<Pet> {
    const viewPet = await this.viewPetUseCase.execute(id);
    return viewPet;
  }
}

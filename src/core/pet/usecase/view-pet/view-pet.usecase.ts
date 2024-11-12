import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from '../../entity/pet.entity';
import { IPetGateway } from 'src/application/operation/gateway/pet/IPetGateway';

@Injectable()
export class ViewPetUseCase {
  constructor(
    @Inject(IPetGateway)
    private petGateway: IPetGateway,
  ) {}

  async execute(id: string): Promise<Pet> {
    const pet = await this.petGateway.findPetById(id);

    if (!pet) {
      throw new NotFoundException('Pet not found!');
    }

    return pet;
  }
}

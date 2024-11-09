import { Inject, Injectable } from '@nestjs/common';
import { RegisterPetDto } from '../../dto/register-pet.dto';
import { Pet } from '../../entity/pet.entity';
import { IPetGateway } from 'src/application/operation/gateway/pet/IPetGateway';

@Injectable()
export class RegisterPetUseCase {
  constructor(
    @Inject(IPetGateway)
    private petGateway: IPetGateway,
  ) {}

  async execute(payload: RegisterPetDto): Promise<Pet> {
    const newPet = Pet.new(payload);

    const petRegistered = await this.petGateway.registerPet(newPet);

    return petRegistered;
  }
}

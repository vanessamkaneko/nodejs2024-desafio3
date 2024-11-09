import { Inject } from '@nestjs/common';
import { RegisterPetDto } from 'src/core/pet/dto/register-pet.dto';
import { Pet } from 'src/core/pet/entity/pet.entity';
import { RegisterPetUseCase } from 'src/core/pet/usecase/register-pet/register-pet.usecase';

export class RegisterPetController {
  constructor(
    @Inject(RegisterPetUseCase)
    private registerPetUseCase: RegisterPetUseCase,
  ) {}

  async handle(pet: RegisterPetDto): Promise<Pet> {
    const registerPet = await this.registerPetUseCase.execute(pet);

    return registerPet;
  }
}

import { Inject } from '@nestjs/common';
import { RegisterOrgDto } from 'src/core/org/dto/register-org.dto';
import { Org } from 'src/core/org/entity/org.entity';
import { RegisterOrgUseCase } from 'src/core/org/usecase/register-org/register-org.usecase';

export class RegisterOrgController {
  constructor(
    @Inject(RegisterOrgUseCase)
    private registerOrgUseCase: RegisterOrgUseCase,
  ) {}

  async handle(payload: RegisterOrgDto): Promise<Org> {
    const registerOrg = this.registerOrgUseCase.execute(payload);

    return registerOrg;
  }
}

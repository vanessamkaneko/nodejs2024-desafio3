import { Inject, Injectable } from '@nestjs/common';
import { RegisterOrgDto } from '../../dto/register-org.dto';
import { Org } from '../../entity/org.entity';
import { IOrgGateway } from 'src/application/operation/gateway/org/IOrgGateway';

@Injectable()
export class RegisterOrgUseCase {
  constructor(
    @Inject(IOrgGateway)
    private orgGateway: IOrgGateway,
  ) {}

  async execute(payload: RegisterOrgDto): Promise<Org> {
    const newOrg = Org.new(payload);

    const createdOrg = await this.orgGateway.registerOrg(newOrg);

    return createdOrg;
  }
}

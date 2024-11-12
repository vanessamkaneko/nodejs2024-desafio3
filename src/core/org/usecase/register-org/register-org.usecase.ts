import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { RegisterOrgDto } from '../../dto/register-org.dto';
import { Org } from '../../entity/org.entity';
import { IOrgGateway } from 'src/application/operation/gateway/org/IOrgGateway';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class RegisterOrgUseCase {
  constructor(
    @Inject(IOrgGateway)
    private orgGateway: IOrgGateway,
  ) {}

  async execute(payload: RegisterOrgDto): Promise<Org> {
    const emailAlreadyExists = await this.orgGateway.findOrgByEmail(
      payload.email,
    );

    if (emailAlreadyExists) {
      throw new BadRequestException('E-mail already in use!');
    }

    const password_hash = await bcrypt.hash(payload.password, 6);

    const orgData = {
      ...payload,
      password: password_hash,
    };

    const newOrg = Org.new(orgData);

    const createdOrg = await this.orgGateway.registerOrg(newOrg);

    return createdOrg;
  }
}

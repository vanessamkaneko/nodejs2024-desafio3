import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { IOrgGateway } from 'src/application/operation/gateway/org/IOrgGateway';
import { AuthenticateOrgDto } from '../../dto/authenticate-org.dto';
import { Org } from '../../entity/org.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthenticateOrgUseCase {
  constructor(
    @Inject(IOrgGateway)
    private orgGateway: IOrgGateway,
  ) {}

  async execute(payload: AuthenticateOrgDto): Promise<Org> {
    const org = await this.orgGateway.findOrgByEmail(payload.email);

    if (!org) {
      throw new UnauthorizedException('Invalid credentials!');
    }

    const doesPasswordMatches = await bcrypt.compare(
      payload.password,
      org.password,
    );

    if (!doesPasswordMatches) {
      throw new UnauthorizedException('Invalid credentials!');
    }

    return org;
  }
}

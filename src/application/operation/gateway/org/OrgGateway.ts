import { Inject } from '@nestjs/common';
import { IOrgGateway } from './IOrgGateway';
import { RegisterOrgDto } from 'src/core/org/dto/register-org.dto';
import { Org } from 'src/core/org/entity/org.entity';
import { IOrgMongoDbRepository } from 'src/infrastructure/persistence/repositories/org/mongodb/IOrg-mongodb.repository';

export class OrgGateway implements IOrgGateway {
  constructor(
    @Inject(IOrgMongoDbRepository)
    private orgRepository: IOrgMongoDbRepository,
  ) {}

  async registerOrg(payload: RegisterOrgDto): Promise<Org> {
    const registerOrg = await this.orgRepository.create(payload);

    return registerOrg;
  }
}

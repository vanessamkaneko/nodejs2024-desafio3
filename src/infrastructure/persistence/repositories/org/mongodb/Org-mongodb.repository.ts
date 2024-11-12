import { Injectable } from '@nestjs/common';
import { RegisterOrgDto } from 'src/core/org/dto/register-org.dto';
import { IOrgMongoDbRepository } from './IOrg-mongodb.repository';
import { Org } from 'src/core/org/entity/org.entity';
import { OrgModel } from 'src/infrastructure/persistence/bds/mongodb/schema/orgModel';

@Injectable()
export class OrgMongoDbRepository implements IOrgMongoDbRepository {
  async create(payload: RegisterOrgDto): Promise<Org> {
    const registeredOrg = await OrgModel.create({ ...payload });

    await registeredOrg.save();

    return registeredOrg;
  }

  async findByEmail(email: string): Promise<Org> {
    const org = await OrgModel.findOne({ email });

    return org;
  }
}

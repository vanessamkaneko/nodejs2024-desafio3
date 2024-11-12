import { RegisterOrgDto } from 'src/core/org/dto/register-org.dto';
import { Org } from 'src/core/org/entity/org.entity';

export interface IOrgMongoDbRepository {
  create(org: RegisterOrgDto): Promise<Org>;
  findByEmail(email: string): Promise<Org>;
}

export const IOrgMongoDbRepository = Symbol('IOrgMongoDbRepository');

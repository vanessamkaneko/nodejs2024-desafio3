import { RegisterOrgDto } from 'src/core/org/dto/register-org.dto';
import { Org } from 'src/core/org/entity/org.entity';

export interface IOrgGateway {
  registerOrg(payload: RegisterOrgDto): Promise<Org>;
}

export const IOrgGateway = Symbol('IOrgGateway');

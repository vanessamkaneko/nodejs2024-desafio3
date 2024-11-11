import { RegisterOrgDto } from '../dto/register-org.dto';

export class Org {
  address: string;
  whatsapp: string;

  private constructor(payload: RegisterOrgDto) {
    this.address = payload.address;
    this.whatsapp = payload.whatsapp;
  }

  public static new(payload: RegisterOrgDto) {
    const org = new Org(payload);
    return org;
  }
}

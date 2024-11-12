import { RegisterOrgDto } from '../dto/register-org.dto';

export class Org {
  _id?: string;
  email: string;
  password: string;
  address: string;
  whatsapp: string;

  private constructor(payload: RegisterOrgDto) {
    this.email = payload.email;
    this.password = payload.password;
    this.address = payload.address;
    this.whatsapp = payload.whatsapp;
  }

  public static new(payload: RegisterOrgDto) {
    const org = new Org(payload);
    return org;
  }
}

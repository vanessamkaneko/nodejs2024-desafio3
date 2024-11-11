import { Body, Controller, Post } from '@nestjs/common';
import { RegisterOrgController } from 'src/application/operation/controller/org/register-org/register-org.controller';
import { RegisterOrgDto } from 'src/core/org/dto/register-org.dto';
import { Org } from 'src/core/org/entity/org.entity';

@Controller('/orgs')
export class OrgControllerRoute {
  constructor(private registerOrgController: RegisterOrgController) {}

  @Post('/register')
  async register(@Body() payload: RegisterOrgDto): Promise<Org> {
    const registerOrg = await this.registerOrgController.handle(payload);
    return registerOrg;
  }
}

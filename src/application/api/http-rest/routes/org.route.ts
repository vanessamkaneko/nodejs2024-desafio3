import { Body, Controller, Post, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { AuthenticateOrgController } from 'src/application/operation/controller/org/authenticate-org/authenticate-org.controller';
import { RegisterOrgController } from 'src/application/operation/controller/org/register-org/register-org.controller';
import { AuthenticateOrgDto } from 'src/core/org/dto/authenticate-org.dto';
import { RegisterOrgDto } from 'src/core/org/dto/register-org.dto';
import { Org } from 'src/core/org/entity/org.entity';

@Controller('/orgs')
export class OrgControllerRoute {
  constructor(
    private registerOrgController: RegisterOrgController,
    private authenticateOrgController: AuthenticateOrgController,
  ) {}

  @Post('/register')
  async register(@Body() payload: RegisterOrgDto): Promise<Org> {
    const registerOrg = await this.registerOrgController.handle(payload);
    return registerOrg;
  }

  @Post('/authenticate')
  async authenticate(
    @Body() payload: AuthenticateOrgDto,
    @Res() reply: FastifyReply,
  ): Promise<{ token: string }> {
    return this.authenticateOrgController.handle(payload, reply);
  }
}

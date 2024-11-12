import { Inject } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { AuthenticateOrgDto } from 'src/core/org/dto/authenticate-org.dto';
import { AuthenticateOrgUseCase } from 'src/core/org/usecase/authenticate-org/authenticate-org.usecase';

export class AuthenticateOrgController {
  constructor(
    @Inject(AuthenticateOrgUseCase)
    private authenticateOrgUseCase: AuthenticateOrgUseCase,
  ) {}

  async handle(
    payload: AuthenticateOrgDto,
    reply: FastifyReply,
  ): Promise<{ token: string }> {
    const authenticateOrg = this.authenticateOrgUseCase.execute(payload);

    const token = await reply.jwtSign({
      sign: {
        sub: (await authenticateOrg)._id,
      },
    });

    return reply.status(200).send({ token });
  }
}

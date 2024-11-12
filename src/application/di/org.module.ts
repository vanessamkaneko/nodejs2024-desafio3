import { Module, Provider } from '@nestjs/common';
import { OrgControllerRoute } from '../api/http-rest/routes/org.route';
import { IOrgMongoDbRepository } from 'src/infrastructure/persistence/repositories/org/mongodb/IOrg-mongodb.repository';
import { OrgMongoDbRepository } from 'src/infrastructure/persistence/repositories/org/mongodb/Org-mongodb.repository';
import { OrgGateway } from '../operation/gateway/org/OrgGateway';
import { IOrgGateway } from '../operation/gateway/org/IOrgGateway';
import { RegisterOrgUseCase } from 'src/core/org/usecase/register-org/register-org.usecase';
import { RegisterOrgController } from '../operation/controller/org/register-org/register-org.controller';
import { AuthenticateOrgUseCase } from 'src/core/org/usecase/authenticate-org/authenticate-org.usecase';
import { AuthenticateOrgController } from '../operation/controller/org/authenticate-org/authenticate-org.controller';

const persistenceProviders: Provider[] = [
  {
    provide: IOrgMongoDbRepository,
    useFactory: () => new OrgMongoDbRepository(),
    inject: [],
  },
  {
    provide: IOrgGateway,
    useFactory: (orgMongoDbRepository: IOrgMongoDbRepository) =>
      new OrgGateway(orgMongoDbRepository),
    inject: [IOrgMongoDbRepository],
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: RegisterOrgUseCase,
    useFactory: (orgGateway: IOrgGateway) => new RegisterOrgUseCase(orgGateway),
    inject: [IOrgGateway],
  },
  {
    provide: AuthenticateOrgUseCase,
    useFactory: (orgGateway: IOrgGateway) =>
      new AuthenticateOrgUseCase(orgGateway),
    inject: [IOrgGateway],
  },
];

const controllerProviders: Provider[] = [
  {
    provide: RegisterOrgController,
    useFactory: (registerOrgUseCase: RegisterOrgUseCase) =>
      new RegisterOrgController(registerOrgUseCase),
    inject: [RegisterOrgUseCase],
  },
  {
    provide: AuthenticateOrgController,
    useFactory: (authenticateOrgUseCase: AuthenticateOrgUseCase) =>
      new AuthenticateOrgController(authenticateOrgUseCase),
    inject: [AuthenticateOrgUseCase],
  },
];

@Module({
  imports: [],
  controllers: [OrgControllerRoute],
  providers: [
    ...persistenceProviders,
    ...useCaseProviders,
    ...controllerProviders,
  ],
})
export class OrgModule {}

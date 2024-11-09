import { Module } from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { IPetMongoDbRepository } from 'src/infrastructure/persistence/repositories/pet/mongodb/IPet-mongodb.repository';
import { PetMongoDbRepository } from 'src/infrastructure/persistence/repositories/pet/mongodb/Pet-mongodb.repository';
import { IPetGateway } from '../operation/gateway/pet/IPetGateway';
import { PetGateway } from '../operation/gateway/pet/PetGateway';
import { RegisterPetUseCase } from 'src/core/pet/usecase/register-pet/register-pet.usecase';
import { RegisterPetController } from '../operation/controller/pet/register-pet/register-pet.controller';
import { PetControllerRoute } from '../api/http-rest/routes/pet.route';
import { ViewPetUseCase } from 'src/core/pet/usecase/view-pet/view-pet.usecase';
import { ViewPetController } from '../operation/controller/pet/view-pet/view-pet.controller';
import { ListPetsUseCase } from 'src/core/pet/usecase/list-pets/list-pets.usecase';
import { ListPetsController } from '../operation/controller/pet/list-pets/list-pets.controller';
import { FilterPetsUseCase } from 'src/core/pet/usecase/filter-pets/filter-pets.usecase';
import { FilterPetsController } from '../operation/controller/pet/filter-pets/filter-pets.controller';

const persistenceProviders: Provider[] = [
  {
    provide: IPetMongoDbRepository,
    useFactory: () => new PetMongoDbRepository(),
    inject: [],
  },
  {
    provide: IPetGateway,
    useFactory: (petMongoDbRepository: IPetMongoDbRepository) =>
      new PetGateway(petMongoDbRepository),
    inject: [IPetMongoDbRepository],
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: RegisterPetUseCase,
    useFactory: (petGateway: IPetGateway) => new RegisterPetUseCase(petGateway),
    inject: [IPetGateway],
  },
  {
    provide: ViewPetUseCase,
    useFactory: (petGateway: IPetGateway) => new ViewPetUseCase(petGateway),
    inject: [IPetGateway],
  },
  {
    provide: ListPetsUseCase,
    useFactory: (petGateway: IPetGateway) => new ListPetsUseCase(petGateway),
    inject: [IPetGateway],
  },
  {
    provide: FilterPetsUseCase,
    useFactory: (petGateway: IPetGateway) => new FilterPetsUseCase(petGateway),
    inject: [IPetGateway],
  },
];

const controllerProviders: Provider[] = [
  {
    provide: RegisterPetController,
    useFactory: (registerPetUseCase: RegisterPetUseCase) =>
      new RegisterPetController(registerPetUseCase),
    inject: [RegisterPetUseCase],
  },
  {
    provide: ViewPetController,
    useFactory: (viewPetUseCase: ViewPetUseCase) =>
      new ViewPetController(viewPetUseCase),
    inject: [ViewPetUseCase],
  },
  {
    provide: ListPetsController,
    useFactory: (listPetsUseCase: ListPetsUseCase) =>
      new ListPetsController(listPetsUseCase),
    inject: [ListPetsUseCase],
  },
  {
    provide: FilterPetsController,
    useFactory: (filterPetsUseCase: FilterPetsUseCase) =>
      new FilterPetsController(filterPetsUseCase),
    inject: [FilterPetsUseCase],
  },
];

@Module({
  imports: [],
  controllers: [PetControllerRoute],
  providers: [
    ...persistenceProviders,
    ...useCaseProviders,
    ...controllerProviders,
  ],
})
export class PetModule {}

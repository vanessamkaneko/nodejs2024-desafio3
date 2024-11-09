import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ListPetsController } from 'src/application/operation/controller/pet/list-pets/list-pets.controller';
import { RegisterPetController } from 'src/application/operation/controller/pet/register-pet/register-pet.controller';
import { ViewPetController } from 'src/application/operation/controller/pet/view-pet/view-pet.controller';
import { ListPetsDto } from 'src/core/pet/dto/list-pets.dto';
import { RegisterPetDto } from 'src/core/pet/dto/register-pet.dto';
import { Pet } from 'src/core/pet/entity/pet.entity';

@Controller('/pets')
export class PetControllerRoute {
  constructor(
    private registerPetController: RegisterPetController,
    private viewPetController: ViewPetController,
    private listPetsController: ListPetsController,
  ) {}

  @Post('/register')
  async register(@Body() payload: RegisterPetDto): Promise<Pet> {
    const registerPet = await this.registerPetController.handle(payload);
    return registerPet;
  }

  @Get('/')
  async list(@Query() query: ListPetsDto): Promise<Pet[]> {
    const listPetsByCity = await this.listPetsController.handle(query);
    return listPetsByCity;
  }

  // // Filtrar pets
  // @Get('/')
  // async list(@Query() query: ListTaskDto): Promise<Task[]> {
  //   const listTasks = await this.listTasksController.handle(query);
  //   return listTasks;
  // }

  @Get('/:id')
  async view(@Param('id') id: string): Promise<Pet> {
    const viewPet = await this.viewPetController.handle(id);
    return viewPet;
  }

  // @Put('/:id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() payload: UpdateTaskDto,
  // ): Promise<Task> {
  //   const updateTask = await this.updateTaskController.handle(id, payload);
  //   return updateTask;
  // }

  // @Delete('/:id')
  // async delete(@Param('id') id: string): Promise<void> {
  //   const deleteTask = await this.deleteTaskController.handle(id);
  //   return deleteTask;
  // }

  // @Patch('/:id/complete')
  // async complete(
  //   @Param('id') id: string,
  //   @Body() payload: UpdateCompleteTaskDto,
  // ): Promise<Task> {
  //   const markTaskAsComplete = await this.updateCompleteTaskController.handle(
  //     id,
  //     payload,
  //   );
  //   return markTaskAsComplete;
  // }
}

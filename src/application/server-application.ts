import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RootModule } from './di/root.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyJwt from '@fastify/jwt';
import { GlobalExceptionFilter } from 'src/global-exception-filter';

export class ServerApplication {
  public async run(): Promise<void> {
    const app = await NestFactory.create<NestFastifyApplication>(
      RootModule,
      new FastifyAdapter(),
    );

    app
      .getHttpAdapter()
      .getInstance()
      .register(fastifyJwt as any, {
        secret: 'your-secret-key',
      });

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new GlobalExceptionFilter());

    await app.listen(3333);
    console.log('Server is online!');
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }
}

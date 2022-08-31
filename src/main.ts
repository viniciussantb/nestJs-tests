import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await AppDataSource.initialize()
  .then(() => console.log('bd up'))
  .catch((error) => console.log(error));


  await app.listen(3000);
}
bootstrap();

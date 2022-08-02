import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT!,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: !!process.env.TYPEORM_ENTITIES,
  logging: !!process.env.TYPEORM_LOGGING,
  entities: [process.env.TYPEORM_ENTITIES!],
  migrations: [process.env.TYPEORM_MIGRATIONS!],
});

import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    host: 'localhost',
    database: 'back',
    username: 'developer',
    password: '1234098765',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}
import { Module } from '@nestjs/common';
import { RideSenseModuleModule } from './ride-sense-module/ride-sense-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RideSenseModuleModule,
  ],
})
export class AppModule {}

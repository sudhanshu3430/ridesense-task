import { Module } from '@nestjs/common';

import { RideSenseModuleController } from './ride-sense-module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RideInfo } from './rideinfo.entity';
import { RideSenseModuleService } from './ride-sense-module.service';

@Module({
    imports: [TypeOrmModule.forFeature([RideInfo])],
    controllers:[RideSenseModuleController],
    providers:[RideSenseModuleService]
})
export class RideSenseModuleModule {

}

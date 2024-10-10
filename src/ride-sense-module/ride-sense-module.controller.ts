import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RideSenseModuleService } from './ride-sense-module.service';
import { CreateBikeInfo } from './ride-sense.dto';


@Controller('ride-sense-module')
export class RideSenseModuleController {
    constructor(private readonly rideService : RideSenseModuleService){}

    @Get()
    findAll(){
        return this.rideService.findAll()
    }

    @Post()
    create(@Body() createBike: CreateBikeInfo ){
        return this.rideService.create(createBike);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() updateInfo: CreateBikeInfo){
        return this.rideService.update(id, updateInfo);

    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.rideService.delete(id);
    }
}

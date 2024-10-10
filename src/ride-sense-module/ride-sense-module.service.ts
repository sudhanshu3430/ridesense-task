import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RideInfo } from './rideinfo.entity';
import { CreateBikeInfo } from './ride-sense.dto';

@Injectable()
export class RideSenseModuleService {
  constructor(
    @InjectRepository(RideInfo)
    private rideRepository: Repository<RideInfo>,
  ) {}

  findAll() {
    return this.rideRepository.find();
  }

  create(dto: CreateBikeInfo) {
    const bike = new RideInfo();
    bike.make = dto.make;
    bike.model = dto.model;
    bike.year = dto.year;
    bike.type = dto.type;
    return this.rideRepository.save(bike);
  }

  async update(
    id: number,
   dto: CreateBikeInfo
  ) {
    const bike = await this.rideRepository.findOne({
      where: { id: id },
    });

    if(bike){
        bike.make= dto.make;
        bike.model = dto.model;
        bike.type = dto.type;
        bike.year = dto.year;
        return this.rideRepository.save(bike);

    }
    return "Id does not exist"
  }

   delete(id: number){
        return this.rideRepository.delete(id).then(() => {});
  }
}

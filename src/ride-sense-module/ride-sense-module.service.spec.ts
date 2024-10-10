import { Test, TestingModule } from '@nestjs/testing';
import { RideSenseModuleService } from './ride-sense-module.service';

describe('RideSenseModuleService', () => {
  let service: RideSenseModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RideSenseModuleService],
    }).compile();

    service = module.get<RideSenseModuleService>(RideSenseModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

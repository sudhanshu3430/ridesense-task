import { Test, TestingModule } from '@nestjs/testing';
import { RideSenseModuleController } from './ride-sense-module.controller';

describe('RideSenseModuleController', () => {
  let controller: RideSenseModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RideSenseModuleController],
    }).compile();

    controller = module.get<RideSenseModuleController>(RideSenseModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

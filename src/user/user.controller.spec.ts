import { Test, TestingModule } from '@nestjs/testing';
import { Response } from 'express';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let spyService: UserService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: UserService,
      useFactory: () => ({
        create: jest.fn(() => []),
      })
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, ApiServiceProvider],
    }).compile();

    userController = module.get<UserController>(UserController);
    spyService = module.get<UserService>(UserService);

  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a user', () => {
      const dto = {
        name: 'josé',
        username: 'jose12',
        password: 'password',
      }
  
      userController.create(dto);
      expect(spyService.create).toHaveBeenCalled();
      expect(spyService.create).toHaveBeenCalledWith(dto);
    });
  })

});

import { Test, TestingModule } from '@nestjs/testing';
import { Request, Response } from 'express';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let controller: ProductController;

  const requestMock = {
    query: {},
    body: {},
  } as unknown as Request;

  const statusResponseMock = {
    send: jest.fn(y => y)
  } as unknown as Response;

  const responseMock = {
    status: jest.fn(x => statusResponseMock),
    send: jest.fn(x => x),
  } as unknown as Response;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getProduct', () => {

    it('should return a 400 status', () => {
      controller.getProduct(requestMock, responseMock);
      expect(responseMock.status).toHaveBeenCalledWith(400);
      expect(statusResponseMock.send).toHaveBeenCalledWith({
        msg: 'missing id'
      });
    });

    it('should return a 200 status and a product information', () => {
      requestMock.query = {
        id: '1',
      }
      controller.getProduct(requestMock, responseMock);
      expect(responseMock.status).toHaveBeenCalledWith(200);
      expect(statusResponseMock.send).toHaveBeenCalledWith({
        name: 'notebook', price: '5$'
      });
    })
  })

  describe('create', () => {

    it('should return a 201 status and a created product', () => {
      requestMock.body = {
        name: 'keyboard',
        price: '50$'
      }

      controller.create(requestMock, responseMock);
      expect(responseMock.status).toHaveBeenCalledWith(201);
      expect(statusResponseMock.send).toHaveBeenCalledWith({
        name: requestMock.body.name,
        price: requestMock.body.price,
      });
    });
  })
});

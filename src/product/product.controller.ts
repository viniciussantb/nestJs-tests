import { Controller, Get, Req, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { Request, Response } from 'express'; 
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProduct(
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const { id } = request.query;

    if(!id) {
      response.status(400).send({ msg: 'missing id' });
    }

    response.status(200).send({ name: 'notebook', price: '5$' });
  }
}

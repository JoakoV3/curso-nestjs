import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  otherEndpoint() {
    return 'hello again';
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=${limit} offset=${offset} brand=${brand}`;
  }

  @Get('products/filter')
  getProductFilter() {
    return `product filter`;
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `product with id ${id}`;
  }

  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `product with id ${productId} fromcategory with id ${id}`;
  }
}

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=${limit} offset=${offset} brand=${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return `product filter`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `product with id ${id}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}

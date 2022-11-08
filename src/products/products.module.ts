import { Module } from '@nestjs/common';

//controllers
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BrandsController } from './controllers/brands.controller';
//services
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { BrandsService } from './services/brands.service';
import { AppService } from 'src/app.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
@Module({
  imports: [HttpModule],
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [
    ProductsService,
    CategoriesService,
    BrandsService,
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const task = await firstValueFrom(
          http.get('https://jsonplaceholder.typicode.com/todos/1'),
        );
        return task.data;
      },
      inject: [HttpService],
    },
  ],
})
export class ProductsModule {}

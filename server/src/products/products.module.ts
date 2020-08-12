import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService], // allows the same instance to be with all other modules
})
export class ProductsModule {
  // reason: A module class can inject providers as well (e.g., for configuration purposes):
  // constructor(private catsService: CatsService) {}
}

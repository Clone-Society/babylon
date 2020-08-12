import { Controller, Get, Post, Body } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get() // root of products => /products
  find(): Product[] {
    return this.productService.find();
  }

  @Post()
  add(@Body() createProductDto: CreateProductDto): Product {
    // Call the productService to delegate responsibility to a provider
    const product = this.productService.create(createProductDto);
    return product;
  }
}

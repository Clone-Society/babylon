import { Injectable } from '@nestjs/common';
import { ProductData, Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  create(productData: ProductData): Product {
    const id = (Math.random() * Math.random()).toString(9).substr(2, 9);

    try {
      if (!Number.parseFloat(productData.price)) {
        console.log('We are here');
        throw TypeError(`TypeError: ${productData.price} is not a number type`);
      }
    } catch (e) {
      const price = 9.99;
      const newProduct = {
        ...productData,
        id,
        price,
      };
      this.products.push(newProduct);
      return newProduct;
    }

    const newProduct: Product = {
      ...productData,
      id,
      price: Number.parseFloat(productData.price),
    };

    this.products.push(newProduct);
    return newProduct;
  }

  find(): Product[] {
    return this.products;
  }

  // findById(id: string): Product
}

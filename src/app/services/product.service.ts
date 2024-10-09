import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  getProducts(): Product[] {
    return [
      new Product(1, 'mouse-ayam-goreng', 200000),
      new Product(2, 'Keyboard', 275000),
      new Product(3, 'WebCam', 430000),
    ];
  }

  getProduct(id: number): Product {
    // let result: Product | undefined = this.getProducts().find(
    //   (value: Product) => id === value.id
    // );

    // if (result) {
    //   return result;
    // }

    // throw new Error('Product not found!');
    return this.getProducts()[0];
  }
}

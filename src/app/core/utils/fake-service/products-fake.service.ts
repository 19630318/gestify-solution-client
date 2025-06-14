import { Injectable } from '@angular/core';
import { Product } from '@core/interfaces/product/product';
import { generateFakeProducts } from '../fake-data/products/product-fake';

@Injectable({ providedIn: 'root' })
export class MockProductService {
    private products: Product[] = generateFakeProducts(20);

    getAll(): Promise<Product[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.products);
            }, 1500);
        });
    }

    getById(id: string): Promise<any> {
        console.log('ID: ', id);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const product = this.products.find((p) => p.idProduct === id);
                if (product) {
                resolve({ success: true, data: product});
                } else {
                resolve({ success: false, message: 'Product not found'});
                }
            }, 1500);
        });
    }
}
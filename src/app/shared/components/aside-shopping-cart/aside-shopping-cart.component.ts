import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@core/interfaces/product/product';
import { TypeFile } from '@core/interfaces/file/file';
import { ProductShoppingCartComponent } from '@componentsShared/product-shopping-cart/product-shopping-cart.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-aside-shopping-cart',
  imports: [
    CommonModule,
    ProductShoppingCartComponent,
    TranslocoModule
  ],
  templateUrl: './aside-shopping-cart.component.html',
  styleUrl: './aside-shopping-cart.component.css'
})
export class AsideShoppingCartComponent {

  @Input() expanded: boolean = false;

  products = signal<Product[]>([
    {
      sallerId: "a25acab1-5f23-4526-a4be-d89836cd47a2",
      idProduct: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
      sallerName: "Daryl Ernser",
      name: "Sleek Cotton Salad",
      description: "Featuring Terbium-enhanced technology",
      images: [
          {
              idFile: "55b6ecc1-8ddf-4fb2-b585-4d234c3cc399",
              idReference: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
              name: "without_acquire.mar",
              type: TypeFile.IMAGE,
              description: "Experience the grey brilliance of our Soap, perfect for sparse environments",
              url: "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
              createdAt: new Date(),
              updatedAt: new Date()
          }
      ],
      price: 840.55,
      stock: 64,
      isActive: true,
      category: "Home",
      subCategory: "Oriental",
      brand: "King, Haley and Funk",
      isNew: true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      sallerId: "a25acab1-5f23-4526-a4be-d89836xs47a2",
      idProduct: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
      sallerName: "Daryl Ernser",
      name: "Sleek Cotton Salad",
      description: "Featuring Terbium-enhanced technology",
      images: [
          {
              idFile: "55b6ecc1-8ddf-4fb2-b585-4d234c3cc399",
              idReference: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
              name: "without_acquire.mar",
              type: TypeFile.IMAGE,
              description: "Experience the grey brilliance of our Soap, perfect for sparse environments",
              url: "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
              createdAt: new Date(),
              updatedAt: new Date()
          }
      ],
      price: 840.55,
      stock: 64,
      isActive: true,
      category: "Home",
      subCategory: "Oriental",
      brand: "King, Haley and Funk",
      isNew: true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    sallerId: "a25acab1-5f23-4526-a4be-d89836cd47a2",
    idProduct: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
    sallerName: "Daryl Ernser",
    name: "Sleek Cotton Salad",
    description: "Featuring Terbium-enhanced technology",
    images: [
        {
            idFile: "55b6ecc1-8ddf-4fb2-b585-4d234c3cc399",
            idReference: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
            name: "without_acquire.mar",
            type: TypeFile.IMAGE,
            description: "Experience the grey brilliance of our Soap, perfect for sparse environments",
            url: "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ],
    price: 840.55,
    stock: 64,
    isActive: true,
    category: "Home",
    subCategory: "Oriental",
    brand: "King, Haley and Funk",
    isNew: true,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    sallerId: "a25acab1-5f23-4526-a4be-d89836xs47a2",
    idProduct: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
    sallerName: "Daryl Ernser",
    name: "Sleek Cotton Salad",
    description: "Featuring Terbium-enhanced technology",
    images: [
        {
            idFile: "55b6ecc1-8ddf-4fb2-b585-4d234c3cc399",
            idReference: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
            name: "without_acquire.mar",
            type: TypeFile.IMAGE,
            description: "Experience the grey brilliance of our Soap, perfect for sparse environments",
            url: "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ],
    price: 840.55,
    stock: 64,
    isActive: true,
    category: "Home",
    subCategory: "Oriental",
    brand: "King, Haley and Funk",
    isNew: true,
    createdAt: new Date(),
    updatedAt: new Date()
},
  {
      sallerId: "a25acab1-5f23-2326-a4be-d89836xs47a2",
      idProduct: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
      sallerName: "Daryl Ernser",
      name: "Sleek Cotton Salad",
      description: "Featuring Terbium-enhanced technology",
      images: [
          {
              idFile: "55b6ecc1-8ddf-4fb2-b585-4d234c3cc399",
              idReference: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
              name: "without_acquire.mar",
              type: TypeFile.IMAGE,
              description: "Experience the grey brilliance of our Soap, perfect for sparse environments",
              url: "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-03.jpg",
              createdAt: new Date(),
              updatedAt: new Date()
          }
      ],
      price: 840.55,
      stock: 64,
      isActive: true,
      category: "Home",
      subCategory: "Oriental",
      brand: "King, Haley and Funk",
      isNew: true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    sallerId: "a25acab1-5f23-4526-a4be-d89836cd47a2",
    idProduct: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
    sallerName: "Daryl Ernser",
    name: "Sleek Cotton Salad",
    description: "Featuring Terbium-enhanced technology",
    images: [
        {
            idFile: "55b6ecc1-8ddf-4fb2-b585-4d234c3cc399",
            idReference: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
            name: "without_acquire.mar",
            type: TypeFile.IMAGE,
            description: "Experience the grey brilliance of our Soap, perfect for sparse environments",
            url: "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ],
    price: 840.55,
    stock: 64,
    isActive: true,
    category: "Home",
    subCategory: "Oriental",
    brand: "King, Haley and Funk",
    isNew: true,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    sallerId: "a25acab1-5f23-4526-a4be-d89836xs47a2",
    idProduct: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
    sallerName: "Daryl Ernser",
    name: "Sleek Cotton Salad",
    description: "Featuring Terbium-enhanced technology",
    images: [
        {
            idFile: "55b6ecc1-8ddf-4fb2-b585-4d234c3cc399",
            idReference: "126bb539-d86e-4366-ba3a-dbed3a2fd484",
            name: "without_acquire.mar",
            type: TypeFile.IMAGE,
            description: "Experience the grey brilliance of our Soap, perfect for sparse environments",
            url: "https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ],
    price: 840.55,
    stock: 64,
    isActive: true,
    category: "Home",
    subCategory: "Oriental",
    brand: "King, Haley and Funk",
    isNew: true,
    createdAt: new Date(),
    updatedAt: new Date()
},
  ]);

  sumPriceProducts(): number {
    let sum = 0;
    this.products().forEach(product => {
      sum += product.price;
    });
    return sum;
  }

}

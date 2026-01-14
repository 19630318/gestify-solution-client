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
            "id": 1,
            "createdAt": "2025-12-20T22:49:58.200586",
            "updatedAt": null,
            "deletedAt": null,
            "createdBy": "Gestify solution server",
            "updatedBy": null,
            "deletedBy": null,
            "name": "Incredible Wool Table_85164979_1_0",
            "description": "Cum adipisci ratione voluptatibus voluptates omnis soluta alias. Explicabo quibusdam quidem dolorum ex cum est modi. Vitae fugit nemo.",
            "price": 63.51,
            "active": true,
            "category": {
                "id": 10,
                "createdAt": "2025-12-20T22:49:53.488435",
                "updatedAt": null,
                "deletedAt": null,
                "createdBy": "Gestify solution server",
                "updatedBy": null,
                "deletedBy": null,
                "name": "Movies & Toys_92453465_9",
                "description": "Ad numquam cupiditate eum deserunt.",
                "image": {
                    "id": 30,
                    "key": "product_category_10_1766270992869_e01d09d25b494169b0e69adbd924b96b.png",
                    "name": "product_category_10",
                    "extension": "png",
                    "size": 2338.0,
                    "blurHash": "L03|mvknfQknknfQfQfQfQfQfQfQ",
                    "path": "/products/categories/images",
                    "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/categories/images/product_category_10_1766270992869_e01d09d25b494169b0e69adbd924b96b.png",
                    "contentType": "image/png",
                    "bucket": "gestifysolution",
                    "createdAt": "2025-12-20T22:49:53.480799"
                }
            },
            "images": [
                {
                    "id": 1,
                    "createdAt": "2025-12-20T22:49:58.20658",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": false,
                    "image": {
                        "id": 36,
                        "key": "product_image_2_1766270995767_550e025f99434d40bc7ab497d6236d7c.png",
                        "name": "product_image_2",
                        "extension": "png",
                        "size": 3688.0,
                        "blurHash": "L0GlQFtAfQtAtAfQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_2_1766270995767_550e025f99434d40bc7ab497d6236d7c.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:57.023868"
                    }
                },
                {
                    "id": 3,
                    "createdAt": "2025-12-20T22:49:58.212339",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": false,
                    "image": {
                        "id": 40,
                        "key": "product_image_3_1766270997030_5aafa5cff120488ba28d8514d3279760.png",
                        "name": "product_image_3",
                        "extension": "png",
                        "size": 3687.0,
                        "blurHash": "L0TQeL-mfQ-m-mfQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_3_1766270997030_5aafa5cff120488ba28d8514d3279760.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:58.185774"
                    }
                },
                {
                    "id": 2,
                    "createdAt": "2025-12-20T22:49:58.210881",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": true,
                    "image": {
                        "id": 32,
                        "key": "product_image_1_1766270994875_5826b1bca9a94b59aaf7e1b3c1fd6a15.png",
                        "name": "product_image_1",
                        "extension": "png",
                        "size": 3688.0,
                        "blurHash": "L0A_KXowfQowowfQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_1_1766270994875_5826b1bca9a94b59aaf7e1b3c1fd6a15.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:55.754688"
                    }
                }
            ]
        },
        {
            "id": 2,
            "createdAt": "2025-12-20T22:49:58.331801",
            "updatedAt": null,
            "deletedAt": null,
            "createdBy": "Gestify solution server",
            "updatedBy": null,
            "deletedBy": null,
            "name": "Sleek Marble Gloves_21673758_1_2",
            "description": "Consequatur expedita quaerat itaque inventore soluta. Minima doloremque labore perferendis consequuntur iusto dicta. Placeat corrupti quae.",
            "price": 79.4,
            "active": true,
            "category": {
                "id": 1,
                "createdAt": "2025-12-20T22:49:47.985164",
                "updatedAt": null,
                "deletedAt": null,
                "createdBy": "Gestify solution server",
                "updatedBy": null,
                "deletedBy": null,
                "name": "Books, Grocery & Tools_97734084_0",
                "description": "Sequi veniam dignissimos.",
                "image": {
                    "id": 21,
                    "key": "product_category_1_1766270987325_8143e5ee8ac442199472d2d90153d34c.png",
                    "name": "product_category_1",
                    "extension": "png",
                    "size": 2338.0,
                    "blurHash": "L0FHSrtTfQtTtTfQfQfQfQfQfQfQ",
                    "path": "/products/categories/images",
                    "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/categories/images/product_category_1_1766270987325_8143e5ee8ac442199472d2d90153d34c.png",
                    "contentType": "image/png",
                    "bucket": "gestifysolution",
                    "createdAt": "2025-12-20T22:49:47.968922"
                }
            },
            "images": [
                {
                    "id": 6,
                    "createdAt": "2025-12-20T22:49:58.335318",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": false,
                    "image": {
                        "id": 41,
                        "key": "product_image_3_1766270997181_4dde49c28f2145daa76436fbc2dae2cc.png",
                        "name": "product_image_3",
                        "extension": "png",
                        "size": 3689.0,
                        "blurHash": "L02-vdkpfQkpkpfQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_3_1766270997181_4dde49c28f2145daa76436fbc2dae2cc.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:58.323103"
                    }
                },
                {
                    "id": 4,
                    "createdAt": "2025-12-20T22:49:58.333315",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": true,
                    "image": {
                        "id": 33,
                        "key": "product_image_1_1766270994883_b537b111a18a485381483065c9935ce2.png",
                        "name": "product_image_1",
                        "extension": "png",
                        "size": 3690.0,
                        "blurHash": "L0HP5%t+fQt+t+fQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_1_1766270994883_b537b111a18a485381483065c9935ce2.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:56.019028"
                    }
                },
                {
                    "id": 5,
                    "createdAt": "2025-12-20T22:49:58.334403",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": false,
                    "image": {
                        "id": 37,
                        "key": "product_image_2_1766270996025_9d90d5381f884c5aa687ee28cf64ae5a.png",
                        "name": "product_image_2",
                        "extension": "png",
                        "size": 3690.0,
                        "blurHash": "L0KMJ5x;fQx;x;fQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_2_1766270996025_9d90d5381f884c5aa687ee28cf64ae5a.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:57.175491"
                    }
                }
            ]
        },
        {
            "id": 3,
            "createdAt": "2025-12-20T22:49:58.466185",
            "updatedAt": null,
            "deletedAt": null,
            "createdBy": "Gestify solution server",
            "updatedBy": null,
            "deletedBy": null,
            "name": "Small Wooden Bench_94842052_1_1",
            "description": "Perferendis repellendus quas cum ratione fuga ex. Perspiciatis sed non voluptas laudantium id praesentium iure. Sequi provident excepturi sequi ratione quam quasi. Occaecati voluptas aspernatur dolorum incidunt fuga dolor suscipit. Porro odit natus suscipit ipsum excepturi doloremque earum.",
            "price": 93.1,
            "active": true,
            "category": {
                "id": 7,
                "createdAt": "2025-12-20T22:49:51.499786",
                "updatedAt": null,
                "deletedAt": null,
                "createdBy": "Gestify solution server",
                "updatedBy": null,
                "deletedBy": null,
                "name": "Beauty, Kids & Music_13919633_6",
                "description": "Quae delectus quia expedita magnam neque fugit cupiditate.",
                "image": {
                    "id": 27,
                    "key": "product_category_7_1766270990870_7704404744e64158919f5c9e3cffbf2f.png",
                    "name": "product_category_7",
                    "extension": "png",
                    "size": 2338.0,
                    "blurHash": "L0Qiem-AfQ-A-AfQfQfQfQfQfQfQ",
                    "path": "/products/categories/images",
                    "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/categories/images/product_category_7_1766270990870_7704404744e64158919f5c9e3cffbf2f.png",
                    "contentType": "image/png",
                    "bucket": "gestifysolution",
                    "createdAt": "2025-12-20T22:49:51.49318"
                }
            },
            "images": [
                {
                    "id": 7,
                    "createdAt": "2025-12-20T22:49:58.46744",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": false,
                    "image": {
                        "id": 42,
                        "key": "product_image_3_1766270997342_6dd07258482145329d7402a11febbe87.png",
                        "name": "product_image_3",
                        "extension": "png",
                        "size": 3690.0,
                        "blurHash": "L0537Tk=fQk=k=fQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_3_1766270997342_6dd07258482145329d7402a11febbe87.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:58.460018"
                    }
                },
                {
                    "id": 9,
                    "createdAt": "2025-12-20T22:49:58.470179",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": false,
                    "image": {
                        "id": 38,
                        "key": "product_image_2_1766270996123_d599e5bb3c07468c8175432b6df9ae5e.png",
                        "name": "product_image_2",
                        "extension": "png",
                        "size": 3689.0,
                        "blurHash": "L0Nbq,$$fQ$$$$fQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_2_1766270996123_d599e5bb3c07468c8175432b6df9ae5e.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:57.335343"
                    }
                },
                {
                    "id": 8,
                    "createdAt": "2025-12-20T22:49:58.469076",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": true,
                    "image": {
                        "id": 34,
                        "key": "product_image_1_1766270994856_278cfbaa770246309c68b0d25ea4c324.png",
                        "name": "product_image_1",
                        "extension": "png",
                        "size": 3688.0,
                        "blurHash": "L050X+kqfQkqkqfQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_1_1766270994856_278cfbaa770246309c68b0d25ea4c324.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:56.104574"
                    }
                }
            ]
        },
        {
            "id": 4,
            "createdAt": "2025-12-20T22:49:58.479693",
            "updatedAt": null,
            "deletedAt": null,
            "createdBy": "Gestify solution server",
            "updatedBy": null,
            "deletedBy": null,
            "name": "Fantastic Wooden Watch_07496470_1_3",
            "description": "Molestiae ducimus accusantium ipsum. Vel cumque mollitia velit tempore saepe magni quos. Nisi quos harum. Cupiditate voluptatem tempora omnis neque eius maiores.",
            "price": 72.65,
            "active": true,
            "category": {
                "id": 2,
                "createdAt": "2025-12-20T22:49:48.636385",
                "updatedAt": null,
                "deletedAt": null,
                "createdBy": "Gestify solution server",
                "updatedBy": null,
                "deletedBy": null,
                "name": "Home, Industrial & Shoes_75806431_1",
                "description": "Ex cupiditate expedita iste.",
                "image": {
                    "id": 22,
                    "key": "product_category_2_1766270988023_ef3cff7cbda14f60b78b485bb0e9e94a.png",
                    "name": "product_category_2",
                    "extension": "png",
                    "size": 2339.0,
                    "blurHash": "L0IsTxx@fQx@x@fQfQfQfQfQfQfQ",
                    "path": "/products/categories/images",
                    "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/categories/images/product_category_2_1766270988023_ef3cff7cbda14f60b78b485bb0e9e94a.png",
                    "contentType": "image/png",
                    "bucket": "gestifysolution",
                    "createdAt": "2025-12-20T22:49:48.630136"
                }
            },
            "images": [
                {
                    "id": 11,
                    "createdAt": "2025-12-20T22:49:58.482555",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": true,
                    "image": {
                        "id": 35,
                        "key": "product_image_1_1766270994850_795395b0966e46b98de0c603e70f111c.png",
                        "name": "product_image_1",
                        "extension": "png",
                        "size": 3689.0,
                        "blurHash": "L01i9Zf-fQf-f-fQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_1_1766270994850_795395b0966e46b98de0c603e70f111c.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:56.172541"
                    }
                },
                {
                    "id": 12,
                    "createdAt": "2025-12-20T22:49:58.483837",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": false,
                    "image": {
                        "id": 39,
                        "key": "product_image_2_1766270996181_05cc8f2929f6442f94c843cf438479b7.png",
                        "name": "product_image_2",
                        "extension": "png",
                        "size": 3690.0,
                        "blurHash": "L0Ro7w%LfQ%L%LfQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_2_1766270996181_05cc8f2929f6442f94c843cf438479b7.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:57.354219"
                    }
                },
                {
                    "id": 10,
                    "createdAt": "2025-12-20T22:49:58.481119",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": false,
                    "image": {
                        "id": 43,
                        "key": "product_image_3_1766270997360_894a528eb4aa4872bead660565e385fb.png",
                        "name": "product_image_3",
                        "extension": "png",
                        "size": 3689.0,
                        "blurHash": "L0K:1{x=fQx=x=fQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_3_1766270997360_894a528eb4aa4872bead660565e385fb.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:58.465592"
                    }
                }
            ]
        },
        {
            "id": 5,
            "createdAt": "2025-12-20T22:50:01.834438",
            "updatedAt": null,
            "deletedAt": null,
            "createdBy": "Gestify solution server",
            "updatedBy": null,
            "deletedBy": null,
            "name": "Incredible Silk Bag_27757632_1_4",
            "description": "Praesentium hic minima. Aliquid labore dolorem quisquam fuga odio. Dolorem ut temporibus possimus enim omnis cupiditate accusamus. At eaque voluptate cum. In fuga repellat quos placeat officiis.",
            "price": 54.21,
            "active": true,
            "category": {
                "id": 9,
                "createdAt": "2025-12-20T22:49:52.835596",
                "updatedAt": null,
                "deletedAt": null,
                "createdBy": "Gestify solution server",
                "updatedBy": null,
                "deletedBy": null,
                "name": "Music_88360550_8",
                "description": "Dignissimos tenetur doloremque magni praesentium aliquam.",
                "image": {
                    "id": 29,
                    "key": "product_category_9_1766270992204_f36e397da64c4ab5a61c4ca4cd2c77a4.png",
                    "name": "product_category_9",
                    "extension": "png",
                    "size": 2339.0,
                    "blurHash": "L02$dUj[fQj[j[fQfQfQfQfQfQfQ",
                    "path": "/products/categories/images",
                    "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/categories/images/product_category_9_1766270992204_f36e397da64c4ab5a61c4ca4cd2c77a4.png",
                    "contentType": "image/png",
                    "bucket": "gestifysolution",
                    "createdAt": "2025-12-20T22:49:52.824829"
                }
            },
            "images": [
                {
                    "id": 15,
                    "createdAt": "2025-12-20T22:50:01.880532",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": true,
                    "image": {
                        "id": 44,
                        "key": "product_image_1_1766270998353_059d714f0562415ea1ee2318b689df0a.png",
                        "name": "product_image_1",
                        "extension": "png",
                        "size": 3689.0,
                        "blurHash": "L0H]cis?fQs?s?fQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_1_1766270998353_059d714f0562415ea1ee2318b689df0a.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:49:59.443258"
                    }
                },
                {
                    "id": 13,
                    "createdAt": "2025-12-20T22:50:01.847078",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": false,
                    "image": {
                        "id": 46,
                        "key": "product_image_3_1766271000591_b83dae01e77848a4aa09a9d62a6fa694.png",
                        "name": "product_image_3",
                        "extension": "png",
                        "size": 3690.0,
                        "blurHash": "L05n%Jk-fQk-k-fQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_3_1766271000591_b83dae01e77848a4aa09a9d62a6fa694.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:50:01.789722"
                    }
                },
                {
                    "id": 14,
                    "createdAt": "2025-12-20T22:50:01.858576",
                    "updatedAt": null,
                    "deletedAt": null,
                    "createdBy": "Gestify solution server",
                    "updatedBy": null,
                    "deletedBy": null,
                    "portrait": false,
                    "image": {
                        "id": 45,
                        "key": "product_image_2_1766270999448_29e52085b94d47c494415c5ad3bb022d.png",
                        "name": "product_image_2",
                        "extension": "png",
                        "size": 3689.0,
                        "blurHash": "L0Bb0YpHfQpHpHfQfQfQfQfQfQfQ",
                        "path": "/products/images",
                        "url": "https://api.gestifysolution.oscarmedina.cloud/api/v1/minio/images/products/images/product_image_2_1766270999448_29e52085b94d47c494415c5ad3bb022d.png",
                        "contentType": "image/png",
                        "bucket": "gestifysolution",
                        "createdAt": "2025-12-20T22:50:00.580167"
                    }
                }
            ]
        }
  ]);

  sumPriceProducts(): number {
    let sum = 0;
    this.products().forEach(product => {
      sum += product.price;
    });
    return sum;
  }

}

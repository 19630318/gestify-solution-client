import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('./shared/components/sidebar/sidebar.component').then(m => m.SidebarComponent),
                title: 'Home'
            }
        ]
    },
    {
        path: 'app',
        children: [
            {
                path: '',
                loadComponent: () => import('./shared/components/sidebar/sidebar.component').then(m => m.SidebarComponent),
                children: [
                    {
                        path: '',
                        redirectTo: 'home',
                        pathMatch: 'full'
                    },
                    {
                        path: 'home',
                        loadComponent: () => import('./features/product/home-products/home-products.component').then(m => m.HomeProductsComponent),
                        title: 'Home Products'
                    },
                    {
                        path: 'profile',
                        loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent),
                        title: 'Profile'
                    },
                    {
                        path: 'products',
                        children: [
                            {
                                path: '',
                                redirectTo: 'list',
                                pathMatch: 'full',
                            },
                            {
                                path: 'list',
                                loadComponent: () => import('./features/product/list-products/list-products.component').then(m => m.ListProductsComponent),
                                title: 'List Products',
                            },
                            {
                                path: 'product/:uuid',
                                loadComponent: () => import('./features/product/view-one-product/view-one-product.component').then(m => m.ViewOneProductComponent),
                                title: 'Product',
                            }     
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./features/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
        title: 'Not Found'
    }
];

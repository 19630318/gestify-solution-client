import { Component, inject, Input, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { IChildItem, IMenuItem } from '@core/interfaces/aside/aside';
import { MenuItemType } from '@core/interfaces/aside/aside';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { CategoryApiService } from '@core/services/category-api/category-api.service';

@Component({
  selector: 'app-aside',
  imports: [RouterModule, MatIconModule, CommonModule, TranslocoModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  @Input() openSidebar: boolean = false;

  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  router = inject(Router);
  categoryApiService = inject(CategoryApiService);

  menuItems: IMenuItem[] = [
    /*{
      type: MenuItemType.Link,
      name: 'sidebar.DASHBOARD',
      icon: 'dashboard',
      state: '/app',
      disabled: false,
      fontSize: '20px',
      tooltip: 'Dashboard',
    },*/
    {
      type: MenuItemType.Link,
      name: 'sidebar.HOME',
      icon: 'home',
      state: '/app/home',
      disabled: true,
      fontSize: '20px',
      show: true,
    },
    {
      type: MenuItemType.Link,
      name:'sidebar.PROFILE',
      icon: 'person',
      state: '/app/profile',
      disabled: true,
      fontSize: '20px',
      show: false,
    },
    {
      type: MenuItemType.Link,
      name:'sidebar.BUSINESSES',
      icon: 'store',
      state: '/app/businesses/list',
      disabled: true,
      fontSize: '20px',
      show: true,
    },
    {
      type: MenuItemType.Link,
      name:'sidebar.PRODUCTS',
      icon: 'inventory_2',
      state: '/app/products/list',
      disabled: true,
      fontSize: '20px',
      show: true,
    },
    {
      type: MenuItemType.DropDown,
      name:'sidebar.categories.CATEGORIES',
      icon: 'category',
      state: '/app/products/categories',
      disabled: false,
      fontSize: '20px',
      show: true,
    }
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.selectMenuCurrentRoute();
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['openSidebar']) {
      
    }
  }

  getCategories() {
    this.categoryApiService.getAllCategories().subscribe(res => {
      if(res.content.length > 0) {
        this.menuItems[4].sub = res.content.map((item) => ({
          type: MenuItemType.Link,
          name: item.name,
          state: '/app/products/list',
          queryParams: { categoryId: item.id },
          disabled: false,
          fontSize: '14px',
          show: true,
        } as IChildItem));
      } else {
        this.menuItems[4].show = false;
      }
    });
  }

  selectMenuCurrentRoute() {
    if (this.isBrowser) {
      this.disabledMenuAll();
      const currentRoute = this.router.url;
      this.menuItems.filter(item => {
        const firstLevel = item.state === currentRoute;
        if (firstLevel) {
          item.disabled = true;
        }
        const secondLevel = item.sub?.find(sub => sub.state === currentRoute);
        if (secondLevel) {
          item.disabled = true;
          secondLevel.disabled = true;
        }
      })
    }
  }

  menuDisabled(name: string) {
    if (this.isBrowser) {
      const item = this.menuItems.find(item => item.name === name);
      if(item?.disabled && item?.type === MenuItemType.DropDown) {
        item.disabled = false;
        return;
      }
      this.disabledMenuAll();
      if (item) {
        item.disabled = true;
      }
    }
  }

  subMenuDisabled(menu: string, subMenu: string) {
    if (this.isBrowser) {
      this.disabledMenuAll();
      const item = this.menuItems.find(item => item.name === menu);
      if (item) {
        item.disabled = true;
        const subItem = item.sub?.find(sub => sub.name === subMenu);
        if (subItem) {
          subItem.disabled = true;
        }
      }
    }
  }

  disabledMenuAll() {
    if (this.isBrowser) {
      this.menuItems.forEach(item => {
        item.disabled = false;
        item.sub?.forEach(sub => {
          sub.disabled = false;
        })
      });
    }
  }

}

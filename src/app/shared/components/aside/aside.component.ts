import { Component, inject, Input, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { IMenuItem } from '@core/interfaces/aside/aside';
import { MenuItemType } from '@core/interfaces/aside/aside';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

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
      state: '/business/home',
      disabled: false,
      fontSize: '20px',
    },
    {
      type: MenuItemType.Link,
      name:'sidebar.PROFILE',
      icon: 'person',
      state: '/business/profile',
      disabled: false,
      fontSize: '20px',
    },
    {
      type: MenuItemType.Link,
      name:'sidebar.PRODUCTS',
      icon: 'inventory_2',
      state: '/business/products/list',
      disabled: true,
      fontSize: '20px',
    },
    {
      type: MenuItemType.DropDown,
      name:'sidebar.categories.CATEGORIES',
      icon: 'category',
      state: '/business/products/categories',
      disabled: false,
      fontSize: '20px',
      sub: [
        {
          type: MenuItemType.Link,
          name:'sidebar.categories.MODERN',
          state: '/business/products/list',
          queryParams: { category: 'modern' },
          disabled: false,
          fontSize: '14px',
        },
        {
          type: MenuItemType.Link,
          name:'sidebar.categories.CLASSIC',
          state: '/business/products/list',
          queryParams: { category: 'classic' },
          disabled: false,
          fontSize: '14px',
        },
        {
          type: MenuItemType.Link,
          name:'sidebar.categories.VINTAGE',
          state: '/business/products/list',
          queryParams: { category: 'vintage' },
          disabled: false,
          fontSize: '14px',
        },
        {
          type: MenuItemType.Link,
          name:'sidebar.categories.WOOD',
          state: '/business/products/list',
          queryParams: { category: 'wood' },
          disabled: false,
          fontSize: '14px',
        },
        {
          type: MenuItemType.Link,
          name:'sidebar.categories.METAL',
          state: '/business/products/list',
          queryParams: { category: 'metal' },
          disabled: false,
          fontSize: '14px',
        },
        {
          type: MenuItemType.Link,
          name:'sidebar.categories.PVC',
          state: '/business/products/list',
          queryParams: { category: 'pvc' },
          disabled: false,
          fontSize: '14px',
        }
      ]
    }
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.selectMenuCurrentRoute();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['openSidebar']) {
      
    }
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

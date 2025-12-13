import { Component, HostListener, inject, signal } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { TranslocoService } from '@jsverse/transloco';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { Lenguage } from '@core/interfaces/transloco/transloco';
import { MatIconModule } from '@angular/material/icon';
import { CookieServiceService } from '@core/services/cookie/cookie-service.service';
import { FooterComponent } from '@componentsShared/footer/footer.component';
import { AlertsComponent } from '@componentsShared/alerts/alerts.component';
import { AsideShoppingCartComponent } from '@componentsShared/aside-shopping-cart/aside-shopping-cart.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    AsideComponent,
    OverlayModule,
    RouterOutlet,
    CommonModule,
    TranslocoModule,
    MatIconModule,
    FooterComponent,
    AlertsComponent,
    AsideShoppingCartComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  platformId(platformId: any) {
    throw new Error('Method not implemented.');
  }

  openSidebar = signal(false);
  expandSidebarShoppingCart = signal(false);
  traslocoService = inject(TranslocoService);
  cookieService = inject(CookieServiceService);
  isBrowser = isPlatformBrowser(this.platformId);

  isOpenOverlayAvatar = signal(false);
  currentLanguage = signal<string>('en');
  typeLanguage = Lenguage;

  openListLanguage = signal(false);

  dataTheme = signal<'dark' | 'light'>('dark');
  leguage = signal<Lenguage>(Lenguage.English);

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.dataTheme.set(this.cookieService.getCookie('data-theme') as 'dark' | 'light');
      this.currentLanguage.set(this.cookieService.getCookie('lenguage') as Lenguage);
      //this.traslocoService.setActiveLang(this.currentLanguage());
  }

  changeLanguage(language: Lenguage) {
    this.traslocoService.setActiveLang(language);
    this.currentLanguage.set(language);
    this.cookieService.setCookie('lenguage', language);
  }

  changeDataTheme(){
      if(this.dataTheme() === 'dark'){
        document.documentElement.setAttribute('data-theme', 'light');
        this.cookieService.setCookie('data-theme', 'light'); 
        this.dataTheme.set('light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        this.cookieService.setCookie('data-theme', 'dark');
        this.dataTheme.set('dark');
      }
      this.cookieService.setCookie('data-theme', this.dataTheme() as 'dark' | 'light')
  }

  //This method close the sidebar when click outside the sidebar
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const sidebar = document.getElementById('app-aside');
    const toggleBtn = document.getElementById('sidebar-toggle-button');
    const target = event.target as HTMLElement;
    if (
      sidebar && !sidebar.contains(target) &&
      toggleBtn && !toggleBtn.contains(target)
    ) {
      this.openSidebar.set(false);
    }
  }

}

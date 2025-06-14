import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieServiceService } from '@core/services/cookie/cookie-service.service';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  cookieService = inject(CookieServiceService);
  translocoService = inject(TranslocoService);
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.cookieService.getCookie('data-theme')) {
        const theme_data = document.documentElement.getAttribute('data-theme');
        this.cookieService.setCookie('data-theme', theme_data as string);
      } else {
        const theme_data = this.cookieService.getCookie('data-theme');
        document.documentElement.setAttribute('data-theme', theme_data as string);
      }
      if(!this.cookieService.getCookie('lenguage')) {
        this.cookieService.setCookie('lenguage', 'en' as string);
      } else {
        const lenguage_data = this.cookieService.getCookie('lenguage');
        this.translocoService.setActiveLang(lenguage_data as string);
      }
    }
  }

}

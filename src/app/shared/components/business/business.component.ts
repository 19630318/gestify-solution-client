import { Component, Input } from '@angular/core';
import { Business } from '@core/interfaces/business/business';
import { RouterLink } from '@angular/router';

import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-business',
  imports: [
    RouterLink,
    TranslocoModule
],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

  @Input() business: Business | undefined;



}

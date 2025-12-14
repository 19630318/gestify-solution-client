import { Component, Input } from '@angular/core';
import { Business } from '@core/interfaces/business/business';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-business',
  imports: [
    RouterLink,
    CommonModule,
    TranslocoModule,
  ],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

  @Input() business: Business | undefined;



}

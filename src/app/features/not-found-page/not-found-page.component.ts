import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [
    TranslocoModule,
    RouterLink
  ],
  templateUrl: './not-found-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {

}

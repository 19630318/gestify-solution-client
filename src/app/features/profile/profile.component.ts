import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-profile',
  imports: [
    MatIconModule,
    TranslocoModule
],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}

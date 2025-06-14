import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '@core/services/alerts/alert.service';

@Component({
  selector: 'app-alerts',
  imports: [
    CommonModule
  ],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {

  alertService = inject(AlertService);

  getAlertClass(typeAlert: string): string {
    switch (typeAlert) {
      case 'success':
        return 'text-green-800 dark:text-green-400';
      case 'danger':
        return 'text-red-800 dark:text-red-400';
      case 'warning':
        return 'text-yellow-800 dark:text-yellow-400';
      case 'info':
        return 'text-blue-800 dark:text-blue-400';
      default:
        return 'text-blue-800 dark:text-blue-400';
    }
  }

  closeAlert(id: number) {
    this.alertService.dismiss(id)
  }

}

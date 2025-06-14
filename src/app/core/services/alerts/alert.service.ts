import { Injectable, signal } from '@angular/core';

export interface Alert {
    message: string;
    type: 'success' | 'danger' | 'warning' | 'info';
    id: number;
}

@Injectable({ providedIn: 'root' })
export class AlertService {
    private alertsSignal = signal<Alert[]>([]);
    alerts = this.alertsSignal.asReadonly();
    private counter = 0;

    show(message: string, type: Alert['type'] = 'info') {
        const newAlert: Alert = { message, type, id: this.counter++ };
        this.alertsSignal.update(alerts => [...alerts, newAlert]);

        setTimeout(() => this.dismiss(newAlert.id), 6000);
    }

    dismiss(id: number) {
        this.alertsSignal.update(alerts => alerts.filter(alert => alert.id !== id));
    }
}
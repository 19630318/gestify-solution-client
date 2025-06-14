import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

@Injectable({ providedIn: 'root' })
export class CookieServiceService {

  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /** Guarda una cookie con expiración opcional (en días) */
  setCookie(name: string, value: string, expiresInDays: number = 7, path: string = '/'): void {
    if (!this.isBrowser) return;
    setCookie(name, value, { expires: expiresInDays, path });
  }

  /** Devuelve el valor de la cookie o null si no existe */
  getCookie(name: string): string | null {
    return this.isBrowser ? getCookie(name) ?? null : null;
  }

  /** Devuelve true si la cookie existe */
  hasCookie(name: string): boolean {
    return this.isBrowser && !!getCookie(name);
  }

  /** Elimina una cookie */
  deleteCookie(name: string): void {
    if (this.isBrowser) removeCookie(name);
  }

  /** Guarda un objeto como JSON */
  setObject<T>(name: string, value: T, expiresInDays: number = 7, path: string = '/'): void {
    if (!this.isBrowser) return;
    const jsonValue = JSON.stringify(value);
    setCookie(name, jsonValue, { expires: expiresInDays, path });
  }

  /** Obtiene un objeto desde una cookie */
  getObject<T>(name: string): T | null {
    if (!this.isBrowser) return null;
    const cookie = getCookie(name);
    try {
      return cookie ? JSON.parse(cookie) : null;
    } catch {
      return null;
    }
  }
}

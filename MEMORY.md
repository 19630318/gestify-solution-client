# MEMORY.md

Memoria de conocimiento del proyecto **gestify-solution-client**. Este archivo resume lo que es el proyecto, cómo está construido y las decisiones y convenciones vigentes, para retomar el contexto rápidamente en futuras sesiones.

---

## 1. Qué es

Cliente web (frontend) de **Gestify Solution**, un panel / tienda de comercio electrónico construido con **Angular 22** (standalone, sin NgModules). Consume una API REST externa y muestra productos, negocios (businesses), categorías y un perfil de usuario.

- **Nombre del paquete:** `gestify-solution-client`
- **Versión:** `0.0.1`
- **API backend:** `https://api.gestifysolution.oscarmedina.cloud/api/v1`
- **Despliegue:** Docker + Nginx en un VPS, vía GitHub Actions.

---

## 2. Stack tecnológico

| Área | Tecnología |
|------|-----------|
| Framework | Angular 22.2 (standalone components, `bootstrapApplication`) |
| Lenguaje | TypeScript 6.0 (modo `strict`) |
| Estilos | Tailwind CSS 4 (vía `@tailwindcss/postcss`) + Material Icons |
| UI kit | Angular Material + CDK 22 |
| i18n | `@jsverse/transloco` 7 (idiomas `es` / `en`, por defecto `en`) |
| Estado | Angular Signals (`signal`, `asReadonly`) |
| HTTP | `HttpClient` con `withFetch()` |
| SSR / Hydration | `provideClientHydration(withEventReplay())` |
| Cookies | `typescript-cookie` envuelto en `CookieServiceService` |
| Zoom imágenes | `@meddv/ngx-pinch-zoom`, `ngx-image-zoom` |
| Datos de prueba | `@faker-js/faker` |
| Tests | Karma + Jasmine |
| Build | `@angular/build:application` (esbuild) |

---

## 3. Arquitectura y organización

Estructura por capas bajo `src/app`:

- **`core/`** — lógica transversal sin UI.
  - `interfaces/` — modelos de dominio (product, business, category, file, aside, home, transloco, sizepagination) y un `core.service`.
  - `services/` — servicios inyectables (`providedIn: 'root'`): `products-api`, `business-api`, `category-api`, `cookie`, `alerts`.
  - `utils/` — helpers y datos/servicios fake (`fake-data`, `fake-service`, `helper.ts`).
- **`features/`** — vistas de negocio (una carpeta por dominio): `product` (home, list, view-one), `business` (list, view-one), `profile`, `not-found-page`.
- **`shared/components/`** — componentes reutilizables de UI (sidebar, footer, breadcrumb, pagination, rating, alerts, product/business cards, placeholders de carga, shopping cart, barra de búsqueda, recomendaciones).

### Enrutamiento (`app.routes.ts`)
- Todo cuelga de `/app`, con `SidebarComponent` como layout contenedor (lazy-loaded).
- Hijos lazy: `home`, `profile`, `products` (`list`, `product/:uuid`), `businesses` (`list`, `business/:uuid`).
- Comodín `**` → `NotFoundPageComponent`.
- **Todas las rutas usan `loadComponent` (lazy loading).**

### Alias de TypeScript (`tsconfig.json` → `paths`)
```
@core/*            → src/app/core/*
@interfaces/*      → src/app/core/interfaces/*
@componentsShared/* → src/app/shared/components/*
@assets/*          → src/assets/*
@env/*             → src/environments/*
```

---

## 4. Patrones y convenciones observadas

- **Standalone components** con `imports: [...]` en el decorador (sin NgModules; hay un `module.ts` residual ver sección 6).
- **Inyección por `inject()`** preferida sobre constructor (aunque coexisten ambos estilos).
- **Caché en servicios API** con un `signal<Record<string, Page>>` indexado por `page-size[-categoryId]`; se devuelve `of(cache)` si hay hit y se rellena con `tap(...)`. `clearCache()` disponible en productos.
- **Paginación** tipada genéricamente: `PageResponse<T>` (estilo Spring Data: `content`, `totalPages`, `pageable`, `sort`, etc.) y variante `PageGetProductsPaginatedResponse` con `page: PageInfo`.
- **Alertas** vía `AlertService` con signal de array y auto-dismiss a los 6 s.
- **SSR-safe:** uso de `isPlatformBrowser(PLATFORM_ID)` antes de tocar `document`/cookies.
- **Tema e idioma** se persisten en cookies (`data-theme`, `lenguage` — nota: la clave tiene typo "lenguage") e se inicializan en `AppComponent.ngOnInit`.
- **Tema oscuro** vía atributo `data-theme=dark` + variante Tailwind personalizada en `styles.css`.
- Cada componente/servicio trae su `.spec.ts` (tests scaffolded por el CLI).
- **Detección de cambios:** tras la actualización a v22, los componentes existentes llevan `ChangeDetectionStrategy.Eager` explícito (preserva el comportamiento anterior). Los componentes nuevos, por defecto de Angular 22, usarán `OnPush`.

---

## 5. Entornos y despliegue

- **Environments:** `environment.ts` (dev) y `environment.prod.ts` (prod). Ambos apuntan a la misma `apiUrl` de producción; difieren solo en `production` y se intercambian por `fileReplacements` en build de producción.
- **Dockerfile:** build multi-stage → `node:24-alpine` compila (`npm run build -- --configuration=production`) y `nginx:alpine` sirve `dist/*/browser/`.
- **nginx.conf:** SPA fallback (`try_files ... /index.html`) + cache de assets estáticos 1 año.
- **docker-compose.yml:** servicio `gestifysolution-panel` expuesto en `127.0.0.1:7172:80`, `restart: unless-stopped`.
- **CI/CD (`.github/workflows/deploy.yml`):** en push a `main`, SSH al VPS → `git pull` + `docker compose up -d --build` + `docker system prune`. Notificaciones por Telegram y email (éxito/fallo). Usa secrets (`SERVER_IP`, `SSH_PRIVATE_KEY`, `TELEGRAM_*`, `MAIL_*`, etc.).

---

## 6. Deuda técnica / puntos de atención

- **Doble carpeta i18n:** existe `public/assets/i18n/{en,es}.json` y también `src/assets/i18n/{en,es}.json`. El loader (`transloco-loader.ts`) pide `/assets/i18n/${lang}.json`; en Angular 21 los assets se sirven desde `public/`, por lo que `src/assets/i18n` podría ser redundante. Verificar y consolidar.
- **Clave de cookie con typo:** `'lenguage'` (debería ser `language`). Cambiarla rompería sesiones existentes, decidir con cuidado.
- **`environment.ts` y `environment.prod.ts` idénticos en `apiUrl`:** no hay URL de API local/dev separada.
- **`module.ts` en `features/product/view-one-product/`:** residuo del estilo NgModule en una app standalone; revisar si se usa.
- **Código comentado abundante** en `product.ts` (interfaz antigua extensa), `home-products.component.ts` (carrusel por tiempo desactivado) y `transloco-loader.ts`. Limpiar cuando se consolide.
- **`console.log('Cargando idioma:', ...)`** activo en el loader de Transloco.
- **Imports sin usar:** `RatingComponent` se importa pero no se usa en las plantillas de `ProductComponent` y `ViewOneProductComponent` (warnings `NG8113` en build). Limpiar.
- **Artefacto de change detection (v22):** la migración a Angular 22 añadió `changeDetection: ChangeDetectionStrategy.Eager` a todos los componentes existentes para preservar el comportamiento previo (en v22 el default pasa a `OnPush`). A futuro conviene migrar componente a componente a `OnPush` + Signals y quitar los `Eager`.
- **`withNoIncrementalHydration()`** se añadió en `app.config.ts` para conservar la hidratación no incremental previa a v22; evaluar habilitar hidratación incremental.
- **Posible typo de naming:** carpeta `shearching-bar` (probablemente "searching-bar").

---

## 7. Comandos clave

```bash
npm start            # ng serve → http://localhost:4200
npm run build        # build de producción (dist/)
npm run watch        # build dev en watch
npm test             # Karma + Jasmine
```

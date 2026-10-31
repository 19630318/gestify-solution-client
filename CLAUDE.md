# CLAUDE.md

Guía para asistentes de IA (Claude, Kiro y similares) que trabajen en **gestify-solution-client**. Léela antes de hacer cambios. Para contexto más amplio ver `MEMORY.md` y `PROJECT_STRUCTURE.md`.

---

## Resumen del proyecto

Frontend **Angular 22** (standalone, Signals, SSR/hydration) de una tienda/panel e-commerce llamada **Gestify Solution**. Consume la API REST en `https://api.gestifysolution.oscarmedina.cloud/api/v1`. Se despliega con Docker + Nginx en un VPS mediante GitHub Actions.

---

## Comandos

```bash
npm start            # servidor de desarrollo (ng serve) en :4200
npm run build        # build de producción → dist/
npm run watch        # build dev en modo watch
npm test             # tests unitarios (Karma + Jasmine)
```

- **No** lances `ng serve`, `npm start` ni `npm run watch` tú mismo en una sesión automatizada: son procesos de larga duración. Pide al usuario que los corra, o usa `npm run build` para verificar compilación.
- Para tests, prefiere una ejecución única sobre el modo watch.

---

## Convenciones que DEBES seguir

### Componentes
- **Siempre standalone.** Nada de NgModules nuevos. Declara dependencias en `imports: [...]` del decorador `@Component`.
- Rutas siempre con **`loadComponent` (lazy)**, igual que el patrón de `app.routes.ts`.
- Un componente por carpeta con sus cuatro archivos: `.ts`, `.html`, `.css`, `.spec.ts`.
- **Detección de cambios (Angular 22):** el default del framework para componentes nuevos es `OnPush`. Los componentes existentes llevan `ChangeDetectionStrategy.Eager` explícito (puesto por la migración a v22 para preservar su comportamiento). No quites esos `Eager` sin verificar que el componente funciona bien con `OnPush`.

### Inyección de dependencias
- Prefiere **`inject()`** sobre inyección por constructor (es el estilo dominante). Mantén consistencia con el archivo que edites.

### Servicios y API
- Servicios `@Injectable({ providedIn: 'root' })`.
- Para endpoints paginados, reutiliza el **patrón de caché con Signals**: `signal<Record<string, Page>>`, clave `page-size[-extra]`, devolver `of(cache)` en hit y rellenar con `tap(...)`. Ver `products-api.service.ts`, `business-api.service.ts`, `category-api.service.ts`.
- Construye URLs a partir de `environment.apiUrl` (importado vía `@env/environment` o ruta relativa).

### Estado
- Usa **Angular Signals** (`signal`, `.asReadonly()`, `.update()`). No introduzcas NgRx u otra librería de estado sin pedirlo.

### Estilos
- **Tailwind CSS 4** para estilado. Modo oscuro mediante `data-theme=dark` (variante custom en `src/styles.css`). Iconos con Material Icons.
- Respeta el presupuesto de estilos por componente: aviso a 4 kB, error a 8 kB (ver `angular.json`).

### Internacionalización
- Textos de UI vía **Transloco** (`TranslocoModule` / pipe `transloco`). Añade claves en los JSON de i18n.
- **Importante:** hay dos ubicaciones de i18n (`public/assets/i18n` y `src/assets/i18n`). Antes de tocar traducciones confirma cuál sirve realmente el runtime (el loader pide `/assets/i18n/{lang}.json`).

### SSR / seguridad de plataforma
- El proyecto usa hydration. **Guarda todo acceso a `document`, `window` o cookies con `isPlatformBrowser(PLATFORM_ID)`**, como en `AppComponent` y `CookieServiceService`. No asumas entorno browser.

### Alias de imports
Usa los alias de `tsconfig.json`, no rutas relativas largas:
```
@core/*  @interfaces/*  @componentsShared/*  @assets/*  @env/*
```

---

## Estructura (resumen)

```
src/app/
├── core/          # interfaces (modelos), services (API/cookie/alerts), utils (fakes/helpers)
├── features/      # vistas de negocio: product, business, profile, not-found-page
└── shared/        # components reutilizables de UI
```
Detalle completo en `PROJECT_STRUCTURE.md`.

---

## Qué NO hacer sin confirmar

- No cambies la clave de cookie `'lenguage'` (typo) ni `'data-theme'`: romperías sesiones existentes.
- No modifiques `environment.*.ts`, `Dockerfile`, `nginx.conf`, `docker-compose.yml` ni `.github/workflows/deploy.yml` sin aprobación explícita: afectan producción/despliegue.
- No añadas tests automáticamente salvo que se pidan.
- No introduzcas NgModules, nuevas librerías de estado ni dependencias sin pedirlo.
- No borres el código comentado existente sin confirmar (hay interfaces/lógica antigua referenciada).

---

## Verificación tras cambios

1. Ejecuta `npm run build` para confirmar que compila (TypeScript está en `strict` + `strictTemplates`).
2. Si tocaste lógica, corre `npm test` para los specs relevantes.
3. Revisa que no queden `console.log` nuevos ni imports sin usar.

---

## Deuda técnica conocida (ver MEMORY.md para la lista completa)

- i18n duplicado (`public/` vs `src/`).
- `environment.ts` y `environment.prod.ts` con la misma `apiUrl`.
- `module.ts` residual en `view-one-product/`.
- Imports sin usar: `RatingComponent` en `ProductComponent` y `ViewOneProductComponent` (warnings NG8113).
- `ChangeDetectionStrategy.Eager` en componentes existentes (artefacto de la migración a v22).
- Posible typo en carpeta `shearching-bar`.

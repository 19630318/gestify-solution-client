# Estructura del proyecto — gestify-solution-client

Mapa de la estructura de carpetas y archivos, con una valoración de si la organización es la correcta.

---

## Árbol de directorios

```
gestify-solution-client/
├── .editorconfig
├── .gitignore
├── .postcssrc.json                 # Tailwind vía @tailwindcss/postcss
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD: SSH al VPS + docker compose + notificaciones
├── Dockerfile                      # build multi-stage (node:24 → nginx:alpine)
├── docker-compose.yml              # servicio en 127.0.0.1:7172:80
├── nginx.conf                      # SPA fallback + cache de assets
├── angular.json                    # @angular/build:application (esbuild)
├── package.json
├── package-lock.json
├── tsconfig.json                   # strict + alias de paths
├── README.md                       # instrucciones del proyecto (Angular 22)
│
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── i18n/
│           ├── en.json             # traducciones servidas en runtime
│           └── es.json
│
└── src/
    ├── index.html
    ├── main.ts                     # bootstrapApplication(AppComponent, appConfig)
    ├── styles.css                  # Tailwind + Material Icons + variante dark
    │
    ├── assets/
    │   └── i18n/
    │       ├── en.json             # ⚠ posible duplicado de public/assets/i18n
    │       └── es.json
    │
    ├── environments/
    │   ├── environment.ts          # dev
    │   └── environment.prod.ts     # prod (misma apiUrl que dev)
    │
    └── app/
        ├── app.component.{ts,html,css,spec.ts}   # root, inicializa tema/idioma
        ├── app.config.ts           # providers: router, hydration, http, transloco
        ├── app.routes.ts           # rutas lazy bajo /app con layout Sidebar
        ├── transloco-loader.ts     # carga /assets/i18n/{lang}.json
        │
        ├── core/                   # ── CAPA TRANSVERSAL (sin UI) ──
        │   ├── interfaces/         # modelos de dominio
        │   │   ├── aside/aside.ts
        │   │   ├── business/business.ts
        │   │   ├── category/category.ts
        │   │   ├── core/           # core.service.ts + logo.ts
        │   │   ├── file/file.ts
        │   │   ├── home/home-configuration.ts
        │   │   ├── product/product.ts
        │   │   ├── sizepagination/sizepagination.ts
        │   │   └── transloco/transloco.ts
        │   ├── services/           # servicios inyectables (providedIn: root)
        │   │   ├── alerts/alert.service.ts
        │   │   ├── business-api/
        │   │   ├── category-api/
        │   │   ├── cookie/
        │   │   └── products-api/
        │   └── utils/
        │       ├── fake-data/products/product-fake.ts
        │       ├── fake-service/products-fake.service.ts
        │       └── helper.ts
        │
        ├── features/               # ── VISTAS DE NEGOCIO (lazy) ──
        │   ├── product/
        │   │   ├── home-products/
        │   │   ├── list-products/
        │   │   └── view-one-product/   # ⚠ contiene un module.ts residual
        │   ├── business/
        │   │   ├── list-businesses/
        │   │   └── view-one-business/
        │   ├── profile/
        │   └── not-found-page/
        │
        └── shared/                 # ── UI REUTILIZABLE ──
            └── components/
                ├── sidebar/            # layout contenedor de /app
                ├── footer/
                ├── breadcrumb/
                ├── pagination/
                ├── rating/
                ├── alerts/
                ├── product/            # card de producto
                ├── business/           # card de negocio
                ├── product-placeholder/              # skeletons de carga
                ├── product-one-placeholder-view/
                ├── business-home-placeholder/
                ├── aside/
                ├── aside-shopping-cart/
                ├── product-shopping-cart/
                ├── shearching-bar/     # ⚠ probable typo: "searching-bar"
                └── viewbefore-recommendations-products/
```

---

## Valoración: ¿es la estructura correcta?

**Sí, en lo esencial es una estructura correcta y recomendable.** Sigue el patrón estándar de Angular moderno `core / features / shared`, que separa bien responsabilidades:

### Lo que está bien hecho
- **Separación por capas clara.** `core` (lógica sin UI), `features` (vistas de dominio) y `shared` (UI reutilizable) es exactamente el layout recomendado por la comunidad Angular. Facilita escalar y localizar código.
- **Organización por dominio** dentro de `features` (`product`, `business`, `profile`) en lugar de por tipo técnico. Agrupar por feature es lo correcto.
- **Lazy loading en todas las rutas** con `loadComponent`, lo que optimiza el bundle inicial.
- **Interfaces/modelos centralizados** en `core/interfaces`, una carpeta por dominio.
- **Servicios API agrupados** con un patrón de caché consistente (Signals).
- **Alias de `tsconfig`** (`@core`, `@interfaces`, etc.) que evitan rutas relativas frágiles.
- **Un archivo por componente/servicio con su spec**, coherente con el scaffolding del CLI.
- **Componentes standalone + Signals**, alineado con las prácticas actuales de Angular 22.

### Ajustes recomendados (menores)
1. **i18n duplicado.** Hay traducciones en `public/assets/i18n` y en `src/assets/i18n`. En Angular 22 los assets se sirven desde `public/`, así que `src/assets/i18n` es probablemente redundante. Mantener una sola fuente evita que se desincronicen.
2. **`module.ts` residual** en `features/product/view-one-product/`. En una app 100 % standalone no debería haber NgModules; conviene revisar si se usa y, si no, eliminarlo.
3. **Typo en `shearching-bar`.** Renombrar a `searching-bar` por claridad (requiere actualizar imports).
4. **`core/interfaces/core/core.service.ts`.** Un servicio dentro de `interfaces/` rompe la convención (los servicios viven en `core/services`). Considerar moverlo.
5. **`utils/fake-data` y `fake-service`** más `shared/components/.../products-fake.ts`: los datos de prueba están dispersos. Si se mantienen, centralizarlos bajo `core/utils` ayudaría; idealmente no deberían ir en producción.
6. **Falta de `guards`, `interceptors` y `resolvers`.** No es un problema hoy, pero cuando aparezca autenticación conviene crear `core/guards` y `core/interceptors` siguiendo el mismo patrón de capas.

### Conclusión
La estructura es **sólida y escalable**; refleja buenas prácticas de Angular moderno. Las observaciones son de limpieza y consistencia, no de diseño: ninguna requiere reorganizar el proyecto, solo pulir duplicados y residuos.

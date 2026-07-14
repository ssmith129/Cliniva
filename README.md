# Cliniva

Angular 21 hospital / clinic management admin dashboard — a role-based (Admin, Doctor, Patient) single-page application with internationalization, RTL support, PWA/service-worker delivery, rich charting, and an optional AI assistant integration.

## Overview

Cliniva is a front-end admin dashboard template for hospital and clinic
management. It ships a large set of feature modules (patients, doctors,
appointments/calendar, tasks, email, contacts, invoices, and more) behind
role-guarded, lazy-loaded routes.

Access is organized around three roles — `ADMIN`, `DOCTOR`, and `PATIENT` —
enforced with an `AuthGuard` and `ngx-permissions`. Authentication is
token-based (JWT), with an HTTP error interceptor and a startup initializer
that hydrates session state before the app renders.

The UI is built on Angular Material and Bootstrap 5, supports 8 UI
languages via `@ngx-translate`, switches text direction (LTR/RTL) at
runtime, and is installable as a Progressive Web App through the Angular
service worker. Data visualization is available through ApexCharts, ECharts,
Chart.js, and ngx-charts, with scheduling via FullCalendar and data grids via
ngx-datatable.

The project is a client-only application: it expects to talk to a backend
API (configured via `apiUrl`) that is not part of this repository.

## Tech stack

| Area | Technology | Version |
| --- | --- | --- |
| Framework | Angular (standalone, zoneless) | `^21.0.3` |
| Language | TypeScript | `~5.9.3` |
| UI toolkit | Angular Material + CDK | `^21.0.2` |
| CSS framework | Bootstrap | `^5.3.7` |
| Reactive core | RxJS | `~7.8.2` |
| i18n | @ngx-translate/core + http-loader | `^17.0.0` |
| Permissions | ngx-permissions | `^19.0.0` |
| Charts | apexcharts / echarts / chart.js / @swimlane/ngx-charts | `^5.3.4` / `~6.0.0` / `^4.5.0` / `^23.0.1` |
| Calendar | @fullcalendar/angular | `^6.1.19` |
| Data grid | @swimlane/ngx-datatable | `^22.0.0` |
| Dates | date-fns + material-date-fns-adapter | `^4.4.0` / `^21.2.14` |
| Spreadsheet export | exceljs + file-saver | `^4.4.0` / `^2.0.5` |
| Rich text | ngx-editor | `^18.0.0` |
| Icons | angular-feather | `^6.5.1` |
| PWA | @angular/service-worker | `^21.0.3` |
| Build / CLI | @angular/build + @angular/cli | `^21.0.2` / `~21.0.2` |
| Lint | ESLint + angular-eslint + typescript-eslint | `^9.34.0` / `21.0.1` |
| Test | Karma + Jasmine | `~6.4.4` / `~5.9.0` |

See [`package.json`](package.json) for the complete dependency list.

## Prerequisites

- **Node.js** — a version compatible with Angular 21 (Node.js `^20.19`, `^22.12`, or `^24`). <!-- TODO: no `engines` field in package.json; confirm the intended Node version and add one. -->
- **npm** — used for dependency management (`package-lock.json` is committed).
- A backend API reachable at the URL configured in `src/environments/environment.ts` (`apiUrl`). Not included in this repository.
- **(Optional) An AI provider API key** — OpenAI, Google Gemini, or Claude — if you enable the in-app AI assistant. Keys are entered in the UI and stored in the browser's `localStorage`, not in the codebase.

> This project sets `legacy-peer-deps=true` in [`.npmrc`](.npmrc), so `npm install` resolves peer dependencies in legacy mode automatically.

## Installation

```bash
# Clone the repository
git clone https://github.com/ssmith129/cliniva.git
cd cliniva

# Install dependencies (.npmrc sets legacy-peer-deps=true)
npm install
```

## Configuration

There is **no `.env` file** in this project. Runtime configuration is handled two ways:

### 1. Angular environment files

Build-time configuration lives in `src/environments/`. `angular.json` replaces
`environment.ts` with `environment.development.ts` for development builds.

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `production` | Yes | `false` (dev) / `true` (prod) | Angular production flag. |
| `apiUrl` | Yes | `http://localhost:4200` | Base URL of the backend API. <!-- TODO: default points at the dev server; set the real API base URL per environment. --> |

Edit these files directly to point the app at your API:

```ts
// src/environments/environment.development.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:4200',
};
```

### 2. AI assistant configuration (runtime)

The AI assistant (`AiService`) is configured at runtime through the UI and
persisted in `localStorage` under the key `cliniva_ai_config`. Supported
providers are `openai`, `gemini`, `claude`, and `none` (disabled). No API
keys are stored in the repository.

## Usage

### Development server

```bash
npm start
# or: npx ng serve
```

Navigate to `http://localhost:4200/`. The app reloads on source changes.
The default route redirects to `/authentication/signin`. Routing uses
`HashLocationStrategy`, so URLs are hash-based (e.g. `/#/admin/dashboard`).

### Production build

```bash
npm run build
```

Artifacts are emitted to `dist/cliniva/` (the browser bundle is under
`dist/cliniva/browser/`). The production configuration enables output
hashing and the service worker, and enforces bundle budgets (4 MB initial
warning / 6 MB error).

### Serve the production build locally

Serve `dist/cliniva/browser/` with any static file server, rewriting all
routes to `index.html` (single-page app fallback).

## Available scripts

Defined in [`package.json`](package.json):

| Script | Command | Description |
| --- | --- | --- |
| `npm start` | `ng serve` | Run the development server on `http://localhost:4200/`. |
| `npm run build` | `ng build` | Production build to `dist/cliniva/`. |
| `npm test` | `ng test` | Run unit tests via Karma + Jasmine. |
| `npm run lint` | `ng lint` | Lint `src/**/*.ts` and `src/**/*.html` with angular-eslint. |
| `npm run ng` | `ng` | Direct access to the Angular CLI. |

## Project structure

```
.
├── src/
│   ├── app/
│   │   ├── core/             # Guards, interceptors, JWT/auth services, roles, initializers
│   │   ├── shared/           # Shared components, pipes, directives
│   │   ├── layout/           # App shell: main + auth layouts, sidebar, header
│   │   ├── config/           # App configuration
│   │   ├── admin/            # Admin role feature module
│   │   ├── doctor/           # Doctor role feature module
│   │   ├── patient/          # Patient role feature module
│   │   ├── authentication/   # Sign-in / sign-up / 404
│   │   ├── calendar/         # FullCalendar scheduling
│   │   ├── apps/ email/      # Bundled example apps (email, chat, etc.)
│   │   ├── contacts/ task/   # Contacts and task management
│   │   ├── charts/ tables/   # Chart and table demo modules
│   │   ├── forms/ ui/ icons/ # UI kit: forms, components, icon sets
│   │   ├── widget/ timeline/ # Widgets and timeline
│   │   ├── extra-pages/ multilevel/  # Misc pages, multi-level menu demo
│   │   ├── app.config.ts     # Application providers (router, http, i18n, charts, SW)
│   │   ├── app.routes.ts     # Top-level, role-guarded lazy routes
│   │   └── app.component.ts  # Root component
│   ├── assets/               # i18n JSON, images, fonts, SCSS themes, static JS/CSS
│   ├── environments/         # environment.ts / environment.development.ts
│   ├── index.html            # App host page
│   ├── main.ts               # bootstrapApplication entry point
│   └── manifest.webmanifest  # PWA manifest
├── document/                 # HTML documentation for the template
├── public/                   # Additional static assets
├── angular.json              # Angular CLI workspace config
├── ngsw-config.json          # Service worker (PWA) caching config
├── vercel.json               # Vercel deployment config
├── eslint.config.js          # ESLint flat config
└── tsconfig*.json            # TypeScript configs (app / spec / base)
```

TypeScript path aliases are configured in `tsconfig.json`: `@core`, `@shared`,
and `@config` map to their respective folders under `src/app/`.

### Internationalization

Translation catalogs live in `src/assets/i18n/` and are loaded over HTTP by
`@ngx-translate/http-loader`. Available languages: **Arabic (`ar`), German
(`de`), English (`en`, fallback), Spanish (`es`), French (`fr`), Hindi
(`hi`), Portuguese (`pt`), Chinese (`zh`)**. Direction (LTR/RTL) is switched
at runtime via `DirectionService` and the Angular CDK `Directionality`.

## Testing

Unit tests run with **Karma** and **Jasmine** (see `tsconfig.spec.json` and
the `test` target in `angular.json`):

```bash
npm test
```

`ng test` launches Karma with `karma-jasmine-html-reporter`; code coverage
is available via `karma-coverage`. Spec files live alongside their sources
(e.g. `src/app/core/service/auth.service.spec.ts`,
`src/app/app.component.spec.ts`).

> No end-to-end (e2e) test setup is configured in this repository.

## Deployment

The repository is configured for **Vercel** ([`vercel.json`](vercel.json)):

- **Install command:** `npm install --legacy-peer-deps`
- **Build command:** `npm run build`
- **Output directory:** `dist/cliniva/browser`
- **Rewrites:** all routes fall back to `/index.html` (SPA routing)
- **Caching headers:** immutable long-cache for hashed static assets; `no-cache` for `ngsw-worker.js`

Because the build produces a static SPA with a service worker, it can be
hosted on any static host that supports SPA fallback rewrites. The
`.vercelignore` file excludes `node_modules`, `dist`, and build caches from
uploads.

## Contributing

<!-- TODO: no CONTRIBUTING guide or CI workflow is present. Document the contribution/PR process if one exists. -->

Tooling conventions enforced in the repo:

- **Linting:** `npm run lint` (angular-eslint flat config in `eslint.config.js`). Rules include `@typescript-eslint/no-explicit-any` (error) and enforced selector prefixes — components use the `app-` element prefix (kebab-case), directives use the `app` attribute prefix (camelCase).
- **TypeScript:** `strict` mode with additional strict Angular template checks (`strictTemplates`, `strictInjectionParameters`).
- **Styles:** components use SCSS (`inlineStyleLanguage: scss`).

Run `npm run lint` and `npm test` before opening a pull request.

## License

<!-- TODO: no LICENSE file found in the repository. Add one (the package.json marks the project as "private"), and document the license here. -->

This project is marked `"private": true` in `package.json` and does not
include a `LICENSE` file.

## Assumptions

- The Node.js version requirement is inferred from Angular 21's published requirements; there is no `engines` field in `package.json` to confirm it.
- `apiUrl` in the environment files points to a backend API that is not part of this repository; the values shown default to the dev server and are expected to be overridden per environment.
- The repository is a dashboard **template** (per `index.html` / `document/`), so several route modules (`ui`, `forms`, `charts`, `tables`, `icons`, `widget`, etc.) are demo/showcase modules rather than production hospital features.

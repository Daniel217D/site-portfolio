# Portfolio ML Showcase

Static site portfolio for ML projects, embedded Reveal.js presentations, and interactive client-side demos backed by external APIs.

## Requirements

Primary development environment:

```text
Docker
```

Local development without Docker is supported with:

```text
Node.js >= 22
npm >= 10
```

## Docker Development

Start the dev server:

```bash
docker compose up app
```

Run project checks through Docker:

```bash
docker compose run --rm app npm run check
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

## Commands

```json
{
  "dev": "nuxt dev",
  "generate": "nuxt generate",
  "preview": "nuxt preview",
  "typecheck": "nuxt typecheck",
  "lint": "eslint .",
  "test:unit": "vitest run",
  "test:e2e": "playwright test",
  "check": "npm run typecheck && npm run lint && npm run test:unit && npm run generate"
}
```

## Environment

Create local environment files from `.env.example` when needed.

```env
NUXT_PUBLIC_DEMO_API_URL=
NUXT_PUBLIC_DEMO_API_KEY=
```

Both values are public Nuxt runtime values by design for the current alpha.

## Static Build

Generate the static site:

```bash
npm run generate
```

Build output:

```text
.output/public
```

Production does not require a Node.js runtime.

## Structure

```text
src/
├── app/
├── pages/
├── widgets/
├── features/
├── entities/
└── shared/
```

The project follows Spec-Driven Development. Requirements live in `specs/`, and agent working instructions live in `.codex/skills/`.

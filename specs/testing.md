# Testing Specification

## Статус

Draft v0.1

---

# Обязательные проверки

Проверки по умолчанию выполняются в Docker.

Рекомендуемый способ запуска полного набора проверок:

```bash
docker compose run --rm app npm run check
```

Локальные команды ниже должны оставаться доступными как дополнительный режим разработки.

## TypeScript

```bash
npm run typecheck
```

## Lint

```bash
npm run lint
```

## Unit Tests

```bash
npm run test:unit
```

Покрываются:

* demo-компоненты;
* компоненты с нетривиальной логикой.

## Static Build

```bash
npm run generate
```

## E2E

```bash
npm run test:e2e
```

На текущем этапе реализация E2E может быть отложена до появления полноценного CI/CD.

---

# Команды проекта

Планируемый набор команд:

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

---

# Критерии качества

Изменение считается завершённым, если:

* обновлены спецификации;
* реализован код;
* проходят проверки типов;
* проходит линтинг;
* проходят unit-тесты;
* выполняется статическая сборка;
* обновлён README при необходимости.

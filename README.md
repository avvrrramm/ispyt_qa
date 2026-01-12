# Teacher Planner PWA - QA Testing

Персоналізований веб-додаток для планування уроків вчителів.

## Структура проєкту

- `src/utils/` — бізнес-логіка (валідація, конфлікти)
- `tests/` — unit-тести (Jest)
- `tests/seed-data.json` — тестові дані

## Запуск тестів

npm install
npm test
npm test -- --coverage

## Покриття вимог

- R1.3 — Календарний графік (timeConflict)
- R1.12 — Валідація полів (validateFields)

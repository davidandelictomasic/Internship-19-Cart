# CART - E-Commerce Shop

Full stack e-commerce application built with NestJS and React.

## Tech Stack

**Backend:** NestJS, Prisma, PostgreSQL, JWT, Swagger  
**Frontend:** React, TypeScript, Tailwind CSS, Vite  

## How to Run

### Docker (recommended)

```bash
cd backend
docker compose up --build
```

This starts PostgreSQL, runs migrations, seeds the database, and starts the API on `http://localhost:3000`.

Then start the frontend:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

### Local Development

1. Start PostgreSQL locally
2. Backend:
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npx tsx prisma/seed.ts
npm run start:dev
```
3. Frontend:
```bash
cd frontend
npm install
npm run dev
```

## Seed Accounts

| Email | Password | Role |
|-------|----------|------|
| admin@cart.com | Test1234! | ADMIN |
| marko@cart.com | Test1234! | USER |
| ana@cart.com | Test1234! | USER |
| ivan@cart.com | Test1234! | USER |
| petra@cart.com | Test1234! | USER |

## API Docs

Swagger available at `http://localhost:3000/api`

## Admin Dashboard

Login as admin and navigate to `http://localhost:5173/admin`

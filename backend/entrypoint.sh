#!/bin/sh
set -e

echo "Waiting for db"
sleep 3

echo "Running Prisma migrations"
npx prisma migrate deploy

echo "Running seed"
npx tsx prisma/seed.ts

echo "Running application..."
node dist/src/main

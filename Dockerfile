FROM node:18-alpine AS builder

WORKDIR /app

# Копируем package.json и package-lock.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Копируем весь код и собираем Next.js
COPY . .
RUN npm run build

RUN ls -la /app/.next

# Удаляем dev-зависимости для минимального размера образа
RUN npm prune --omit=dev

# Финальный образ
FROM node:18-alpine AS runner

WORKDIR /app

# Копируем только необходимые файлы из builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

# Указываем, что это production-среда
ENV NODE_ENV=production

# Запуск Next.js
CMD ["npm", "run", "start"]

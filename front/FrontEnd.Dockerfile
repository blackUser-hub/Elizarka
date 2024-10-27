# Frontend.Dockerfile

# Используем образ Node.js
FROM node:latest

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json ./
RUN npm install

# Копируем все остальные файлы
COPY . .

# Сборка приложения
RUN npm run build

# Сервируем статические файлы
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Порт
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]

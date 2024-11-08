# Backend.Dockerfile

# Используем образ Python 
FROM python:3.10.14-slim
FROM node:latest
FROM nginx:alpine
WORKDIR /app
COPY package.json ./
COPY --from=0 /app/build /usr/share/nginx/html


RUN npm install
RUN npm i
# Устанавливаем рабочую директорию

EXPOSE 80
COPY requirements.txt .


# Копируем файл requirements.txt и устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt
RUN npm run start

COPY . .

ENV PYTHONDONTBYTECODE 1
ENV PYTHONUNBUFFERED 1


# Указываем команду для запуска приложения
CMD ["uvicorn", "main:app", "--host", "backend", "--port", "8000", "nginx", "-g", "daemon off;"]
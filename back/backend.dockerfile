# Backend.Dockerfile

# Используем образ Python 
FROM python:3.11
# Устанавливаем рабочую директорию
WORKDIR /app

COPY requirements.txt .

# Копируем файл requirements.txt и устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV PYTHONDONTBYTECODE 1
ENV PYTHONUNBUFFERED 1


# Указываем команду для запуска приложения
CMD ["uvicorn", "main:app", "--host", "backend", "--port", "8000"]
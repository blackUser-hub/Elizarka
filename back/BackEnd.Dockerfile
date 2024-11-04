# Backend.Dockerfile

# Используем образ Python 
FROM python:3.9

# Устанавливаем рабочую директорию
WORKDIR /app

RUN  apt-get update && apt-get install -y \
build-essential \
python3-distutils \
&& rm -rf /var/lib/apt/lists/*
# Копируем файл requirements.txt и устанавливаем зависимости
COPY requirements.txt .
RUN pip install --upgrade pip

RUN pip install --no-cache-dir -r requirements.txt

# Копируем содержимое приложения
COPY . .

# Указываем команду для запуска приложения
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
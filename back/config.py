from pydantic_settings import BaseSettings, SettingsConfigDict

import os

DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_NAME = os.getenv('DB_NAME')

BACKEND_PORT = os.getenv('BACKEND_PORT')
BACKEND_HOST = os.getenv('BACKEND_HOST')


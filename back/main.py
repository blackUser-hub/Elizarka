from fastapi import FastAPI
from routers.file import router as file_router
from routers.user import router as user_router
from routers.ml import router as ml_router
from func.user import *

app = FastAPI()

app.include_router(file_router, prefix="/api/v1/files", tags=["files"])
app.include_router(user_router, prefix="/api/v1/users", tags=["users"])
app.include_router(ml_router, prefix="/ml", tags=["ML"])


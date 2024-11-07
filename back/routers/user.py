from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from shemas.orm import UserOrm
from engines import async_session_factory
from func.user import create_tables, drop_tables, new_user, get_user, update_password

router = APIRouter()

class UserCreate(BaseModel):
    id: str
    inviter: str
    mail: str
    phone: str
    org_code: str
    org_name: str
    age: int
    password: str
  
class UpdatePassword(BaseModel):
    new_pass: str

@router.post("/create_tables")
async def create_tables_endpoint():
    await create_tables()
    return {"message": "Tables created"}

@router.post("/drop_tables")
async def drop_tables_endpoint():
    await drop_tables()
    return {"message": "Tables dropped"}

@router.post("/new_user")
async def new_user_endpoint(data:dict):
    user_data = UserOrm(id = data['id'], inviter=data["inviter"], invite_count=0, mail=data["mail"], phone=data['phone'], org_code=data['org_code'], org_name=data['org_name'], age=data['age'], password=data['password'])
       
    message = await new_user(user_data)
    return {"message": message}

@router.get("/get_user/{id}")
async def get_user_endpoint(id: str):
    user = await get_user(id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {'id':user.id, 'inviter': user.inviter, 'invite_count': user.invite_count, 'mail': user.mail, 'phone': user.phone, 'org_code': user.org_code, 'org_name': user.org_name, 'age': user.age, 'password': user.password}
    

@router.put("/update_password/{id}")
async def update_password_endpoint(id: str, update_password: UpdatePassword):
    message = await update_password(id, update_password.new_pass)
    return {"message": message}

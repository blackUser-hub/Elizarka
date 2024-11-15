from sqlalchemy import text, insert, select, update
from engines import async_engine, async_session_factory, Base
from shemas.models import  metadata_obj, users_table
from shemas.orm import UserOrm



async def create_tables():
    async with async_engine.begin() as conn: 
        await conn.run_sync(Base.metadata.create_all)


async def drop_tables():
    async with async_engine.begin() as conn: 
        await conn.run_sync(Base.metadata.drop_all)



async def new_user(data:dict):  
    async with async_session_factory() as session:
        user = UserOrm(id = data['id'], inviter=data["inviter"], invite_count=0, mail=data["mail"], phone=data['phone'], org_code=data['org_code'], org_name=data['org_name'], age=data['age'], password=data['password'])
        session.add(user)
        await session.commit()
    return 'пользователь создан'
    


async def get_user(id:str) -> dict:
    async with async_session_factory() as session:
        result = await session.execute(select(UserOrm).filter_by(id=id))
        user = result.scalar_one_or_none()
        return {'id':user.id, 'inviter': user.inviter, 'invite_count': user.invite_count, 'mail': user.mail, 'phone': user.phone, 'org_code': user.org_code, 'org_name': user.org_name, 'age': user.age, 'password': user.password}
    

async def update_password(id:str, new_pass:str):
    async with async_session_factory() as session:
        result = await session.execute(select(UserOrm).filter_by(id=id))
        user = result.scalar_one_or_none()
        if user:
            user.password = new_pass
            await session.commit()
    return 'Пароль изменён'


from sqlalchemy import text, insert, select, update
from engine import async_engine, async_session_factory, Base, engine
from shemas.models import  metadata_obj, users_table
from shemas.orm import UserOrm



def create_tables():
    Base.metadata.create_all(engine)


def drop_tables():
    Base.metadata.drop_all(engine)



async def new_user(data:dict):  
    async with async_session_factory() as session:
        user = UserOrm(inviter=data["inviter"], invite_count=0, mail=data["mail"], phone=data['phone'], org_code=data['org_code'], org_name=data['org_name'], age=data['age'], password=data['password'])
        session.add(user)
        await session.commit()
    return 'пользователь создан'
    


async def get_user(id:str) -> dict:
    async with async_session_factory() as session:
        result = await session.execute(select(UserOrm).filter_by(id=id))
        user = result.scalar_one_or_none()
        return user
    

async def update_password(id:str, new_pass:str):
    async with async_session_factory() as session:
        result = await session.execute(select(UserOrm).filter_by(id=id))
        user = result.scalar_one_or_none()
        if user:
            user.password = new_pass
            await session.commit()
    return 'Пароль изменён'


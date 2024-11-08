from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import Session, sessionmaker, DeclarativeBase
from sqlalchemy import URL, create_engine, text, MetaData
from config import *



async_engine = create_async_engine(
    url=f"postgresql+asyncpg://{DB_USER}:{DB_PASSWORD}@{"localhost"}:{5432}/{DB_NAME}",
    echo=True,
)




metadata_obj = MetaData()
class Base(DeclarativeBase):
    metadata = metadata_obj


    
engine = create_engine(
    url= f"postgresql+psycopg://{DB_USER}:{DB_PASSWORD}@{"localhost"}:{5432}/{DB_NAME}",
    echo=True,
    # pool_size=5,
    # max_overflow=10,
)

async_session_factory = async_sessionmaker(async_engine)
sync_session = Session(engine)
async_sessions = AsyncSession(async_engine)

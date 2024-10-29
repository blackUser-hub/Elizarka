from pydantic import BaseModel
from sqlalchemy import Table, Column, Integer, String, MetaData, ARRAY, DATE, Text
from sqlalchemy.orm import Mapped, mapped_column
from engine import Base
import datetime


metadata_obj = MetaData(schema='ai')





users_table  = Table(
    'Users',
     metadata_obj,
    Column('id', String, primary_key=True),
    Column('inviter', String),
    Column('invite_count', Integer),
    Column('mail', String),
    Column('phone', String),
    Column('org_code', String),
    Column('org name', String),
    Column('age', Integer),
    Column('password', String)
)
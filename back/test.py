from func.file import *

from func.user import *

from shemas.orm import *
import asyncio


async def main():
    drop_tables()
    create_tables()

    file = FileOrm(
    id= '123',
    name='писька',
    tag='12345',
    size='321',
    date='123213213123',
    title= 'capusta',
    owner='govno',
    csv_path='123'
    )

    create_file(file)
if __name__ == "__main__": 
    asyncio.run(main())
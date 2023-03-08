from sqlalchemy import Integer, String
from sqlalchemy.sql.schema import Column
from .database import Base

class Employee(Base):
    __tablename__ = "employees" 
    id = Column(Integer, primary_key = True)
    name = Column(String, nullable = False)
    surname = Column(String, nullable = False)
        
    class Config:
        orm_mode = True




    
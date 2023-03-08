from pydantic import BaseModel

class CreateEmployeeRequest(BaseModel):
    name:str
    surname: str
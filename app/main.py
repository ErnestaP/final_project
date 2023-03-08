from typing import Union
from .schemas import CreateEmployeeRequest
from sqlalchemy.orm import Session
from .database import get_db
from fastapi import FastAPI, Depends
from .models import Employee
import zmq
import time
from datetime import datetime 
from fastapi.middleware.cors import CORSMiddleware

context = zmq.Context()
socket = context.socket(zmq.PUSH)
socket.bind('tcp://*:5557')
app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/")
def create(details: CreateEmployeeRequest, db:Session = Depends(get_db)):
    to_create = Employee(
        name=details.name,
        surname=details.surname
    )
    db.add(to_create)
    db.commit()
    now = datetime.now()
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    event = {"date": dt_string, "log": f"Created employee name {details.name}, surname {details.surname}"}
    socket.send_json(event)    
    return {
        "success": True,
        "created_id": to_create.id
    }

@app.get("/")
def get_by_id(id: int, db: Session=Depends(get_db)):
    now = datetime.now()
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    event = {"date": dt_string, "log": f"Requested employee with id {id}"}
    socket.send_json(event)    
    return db.query(Employee).filter(Employee.id == id).first()


@app.get("/all")
def get_all(db: Session=Depends(get_db)):
    now = datetime.now()
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    event = {"date": dt_string, "log": f"Requested all employees"}
    socket.send_json(event)    
    return db.query(Employee).all()

@app.delete("/")
def delete(id: int, db: Session = Depends(get_db)):
    print(id)
    db.query(Employee).filter(Employee.id == id).delete()
    db.commit()
    now = datetime.now()
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    event = {"date": dt_string, "log": f"Deleted employee with id {id}"}
    socket.send_json(event)    
    return {"success": True}


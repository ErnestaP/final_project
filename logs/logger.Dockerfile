FROM python:latest
RUN pip install pyzmq
RUN pip install zmq
COPY ./logger.py ./logger.py

CMD ["python","-u","./logger.py"] 


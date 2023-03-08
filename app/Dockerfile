# Dockerfile

# pull the official docker image
FROM python:3.11.1-slim
ENV PYTHONDONTWRITEBYTECODE 1
ENV TYPEORM_HOST project_db
ENV PYTHONUNBUFFERED 1
COPY . ./app
WORKDIR /app
RUN pip install -r requirements.txt

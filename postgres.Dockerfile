FROM postgres:13
ENV POSTGRES_USER user
ENV POSTGRES_PASSWORD user
ENV POSTGRES_DB course_project
ADD CreateDB.sql /docker-entrypoint-initdb.d/
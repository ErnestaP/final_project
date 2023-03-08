CREATE TABLE employees (
    id serial PRIMARY KEY, 
    name VARCHAR ( 50 ) NOT NULL,
    surname VARCHAR ( 50 ) NOT NULL
);
INSERT INTO employees (name, surname)
VALUES('Ernesta','Petraityte');
INSERT INTO employees (name, surname)
VALUES('Greta','Shindler');
INSERT INTO employees (name, surname)
VALUES('Jessica','Rowans');
INSERT INTO employees (name, surname)
VALUES('Milan','Kitchen');
INSERT INTO employees (name, surname)
VALUES('Gregory','Fin');

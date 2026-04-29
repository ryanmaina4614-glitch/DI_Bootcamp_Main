CREATE TABLE actors(
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    age DATE NOT NULL,
    number_oscars SMALLINT NOT NULL
);

SELECT first_name, last_name FROM actors WHERE first_name = 'Matt'  AND 
last_name = 'Clooney' ;

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

SELECT * FROM actors


INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
('Angelina', 'Jolie', '1975-06-04', 1),
('Jennifer', 'Aniston', '1969-02-11', 0);

SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name, last_name)
VALUES ('John', 'Doe');

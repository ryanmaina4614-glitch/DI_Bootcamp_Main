
-- PART I: ONE TO ONE RELATIONSHIP
-- Customer & Customer Profile

DROP TABLE IF EXISTS customer_profile CASCADE;
DROP TABLE IF EXISTS customer CASCADE;

CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Insert customers
INSERT INTO customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert customer profiles using subqueries
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (
    TRUE,
    (SELECT id FROM customer WHERE first_name = 'John')
);

INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (
    FALSE,
    (SELECT id FROM customer WHERE first_name = 'Jerome')
);


-- JOINS (PART I)


-- 1. First name of logged-in customers
SELECT c.first_name
FROM customer c
JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

-- 2. All customers with login status (including those without profile)
SELECT c.first_name, cp.isLoggedIn
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id;

-- 3. Number of customers NOT logged in
SELECT COUNT(*) AS not_logged_in_count
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = FALSE OR cp.isLoggedIn IS NULL;


-- PART II: BOOKS & STUDENTS (MANY TO MANY)


DROP TABLE IF EXISTS library CASCADE;
DROP TABLE IF EXISTS student CASCADE;
DROP TABLE IF EXISTS book CASCADE;

CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);

CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

CREATE TABLE library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Insert books
INSERT INTO book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- Insert students
INSERT INTO student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Insert into library using subqueries

INSERT INTO library VALUES (
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'John'),
    '2022-02-15'
);

INSERT INTO library VALUES (
    (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-03-03'
);

INSERT INTO library VALUES (
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'Lera'),
    '2021-05-23'
);

INSERT INTO library VALUES (
    (SELECT book_id FROM book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-08-12'
);


-- DISPLAY DATA


-- 1. All columns from junction table
SELECT * FROM library;

-- 2. Student name + book title
SELECT s.name AS student_name, b.title AS book_title
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id;

-- 3. Average age of students who borrowed "Alice In Wonderland"
SELECT AVG(s.age) AS average_age
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- 4. Delete a student and observe cascade
DELETE FROM student WHERE name = 'Bob';

-- After deletion, related rows in library are automatically removed
SELECT * FROM library;
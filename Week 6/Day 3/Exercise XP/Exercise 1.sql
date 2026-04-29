SELECT * FROM language

SELECT f.title,
       f.description,
       l.name AS language_name
FROM film f
JOIN language l ON f.language_id = l.language_id;

SELECT f.title,
       f.description,
       l.name AS language_name
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name)
VALUES 
('Interstellar 2'),
('The Matrix Resurgence'),
('Inception Redux');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    title VARCHAR(255),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
	language_id INT REFERENCES language(language_id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id,  language_id, title, score, review_text)
VALUES 
(1, 1, 'Amazing sequel!', 9, 'This film exceeded expectations with visuals and story.'),
(2, 1, 'Pretty good', 8, 'Strong performance and engaging plot.');

DELETE FROM new_film
WHERE id = 1;


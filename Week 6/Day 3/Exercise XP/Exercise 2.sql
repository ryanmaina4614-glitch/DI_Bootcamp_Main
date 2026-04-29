SELECT * FROM language;

UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2, 3);

UPDATE film
SET language_id = (
    SELECT language_id
    FROM language
    WHERE name = 'French'
)
WHERE film_id = 1;

SELECT
    tc.constraint_name,
    tc.table_name,
    kcu.column_name,
    ccu.table_name AS references_table,
    ccu.column_name AS references_column
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu
    ON ccu.constraint_name = tc.constraint_name
WHERE tc.table_name = 'customer';

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

SELECT f.film_id, f.title, f.rental_rate
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

SELECT f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
AND a.first_name = 'Penelope'
AND a.last_name = 'Monroe';

SELECT title, length, rating
FROM film
WHERE length < 60
AND rating = 'R'
AND description ILIKE '%documentary%';

SELECT f.title, p.amount, r.return_date
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN customer c ON p.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND p.amount > 4
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT DISTINCT f.title, f.description, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC;
SELECT make, model, year, users.name FROM vehicles
JOIN users
ON users.id = owner_id 
WHERE year > 2000
ORDER BY year DESC
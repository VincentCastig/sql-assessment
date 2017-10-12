Delete FROM vehicles WHERE id = $1
RETURNING *;
UPDATE VEHICLES SET owner_id = null WHERE id = $2 AND owner_id = $1
RETURNING *;
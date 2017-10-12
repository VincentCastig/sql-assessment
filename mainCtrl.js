module.exports = {

getAllUsers : (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.getAllUsers().then(users => res.status(200).send(users)).catch(() => res.status(500).send())
},
getAllVehicles : (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.getAllVehicles().then(users => res.status(200).send(users)).catch(() => res.status(500).send())
},
addUser : (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {name, email} = req.body
    dbInstance.addUser([name, email]).then(users => res.status(200).send(users)).catch((err) => res.status(500).send(err));
},
addVehicle : (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {make, model, year, owner_id} = req.body
    dbInstance.addVehicle([make, model, year, owner_id]).then(vehicle => res.status(200).send(vehicle)).catch((err) => res.status(500).send(err));
},
getVehicleCountByUserId: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {userId} = req.params
    dbInstance.getVehicleCountByUserId(userId).then(user => res.status(200).send(user)).catch((err) => res.status(500).send(err));
},
getVehiclesByUserId: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {userId} = req.params
    dbInstance.getVehiclesByUserId(userId).then(user => res.status(200).send(user)).catch((err) => res.status(500).send(err));
},
getVehiclesByEmail: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {userEmail, userFirstStart} = req.query
    if(userEmail) {
        dbInstance.getVehiclesByEmail(userEmail).then(vehicle=>res.status("200").send(vehicle)).catch((error)=>res.status("500").send(error));
    }
    else if(userFirstStart) {
        dbInstance.getVehiclesByUserLetter(userFirstStart).then(user => res.status(200).send(user)).catch((err) => res.status(500).send(err));
    }
},
newVehiclesByYear: (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.newVehiclesByYear().then(user => res.status(200).send(user)).catch((err) => res.status(500).send(err));
},
changeOwnership: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {vehicleId, userId} = req.params
    dbInstance.changeOwnership(vehicleId, userId).then(user => res.status(200).send(user)).catch((err) => res.status(500).send(err));
},
removeOwnership: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {userId, vehicleId} = req.params
    dbInstance.removeOwnership(userId, vehicleId).then(user => res.status(200).send(user)).catch((err) => res.status(500).send(err));
},
removeVehicle: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {vehicleId} = req.params
    dbInstance.removeVehicle(vehicleId).then(user => res.status(200).send(user)).catch((err) => res.status(500).send(err));
},
}
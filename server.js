const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , config = require('./config')

const mainCtrl = require('./mainCtrl');

const app = express();

app.use(bodyParser.json())
app.use(cors());

// You need to complete the information below to connect
// to the assessbox database on your postgres server.
massive(
 config
).then( db => {
  app.set('db', db);

  // Initialize user table and vehicle table.
  db.init_tables.user_create_seed().then( response => {
    console.log('User table init');
    db.init_tables.vehicle_create_seed().then( response => {
      console.log('Vehicle table init');
    })
  })

})


// ===== Build enpoints below ============


app.get('/api/users', mainCtrl.getAllUsers)
app.get('/api/user/:userId/vehiclecount', mainCtrl.getVehicleCountByUserId)
app.get('/api/user/:userId/vehicle', mainCtrl.getVehiclesByUserId)
app.get('/api/newervehiclesbyyear', mainCtrl.newVehiclesByYear)

app.get('/api/vehicle', mainCtrl.getVehiclesByEmail)
app.get('/api/vehicles', mainCtrl.getAllVehicles)
app.post('/api/users', mainCtrl.addUser)
app.post('/api/vehicles', mainCtrl.addVehicle)

app.put('/api/vehicle/:vehicleId/user/:userId', mainCtrl.changeOwnership)

app.delete('/api/user/:userId/vehicle/:vehicleId', mainCtrl.removeOwnership)
app.delete('/api/vehicle/:vehicleId', mainCtrl.removeVehicle)



// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})

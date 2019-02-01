const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/'));

massive(process.env.CONNECTION_STRING)
.then((db) => {
    app.set('db', db)
})
.catch((err) => {console.log(err)});

app.get('/api/houses', ctrl.getHouses)
app.post('/api/house/', ctrl.addHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)

const PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT, () => {console.log(`listening on PORT ${PORT}`)})
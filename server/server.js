const express = require('express')
const cors = require('cors');
const {readdirSync} = require('fs')
const app = express()

//routes
require('./routes/gasto.router')(app);
require('./routes/ingreso.router')(app);

app.listen(puerto, () => {
    console.log("Listening at Port "+ puerto)
});

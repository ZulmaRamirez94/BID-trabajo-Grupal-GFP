const express = require('express')
const cors = require('cors');
const app = express()

require('dotenv').config()

const puerto = process.env.PUERTO
require('./config/mongoose.config')
//middlewares
app.use(express.json())
app.use(cors())

//routes
require('./routes/gasto.router')(app);
require('./routes/ingreso.router')(app);

app.listen(puerto, () => {
    console.log("Listening at Port "+ puerto)
});

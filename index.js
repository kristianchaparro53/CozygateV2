const express = require('express');
const connectDb = require('./config/db');
const cors = require('cors');
const app = express();

connectDb();

app.use(cors());
app.use(express.json());    

//Importacion de las rutas desde la carpeta de rutas para el archivo de usuario
app.use("/users", require("./routes/users"))
app.use("/access", require("./routes/access"))
app.use("/admin", require("./routes/admin"))
app.use("/appi", require("./routes/appi"))
app.use("/visita", require("./routes/visita"))








app.listen(4000, () => {
    console.log("servidor corriendo en el puerto 4000")
})


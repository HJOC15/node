require("dotenv").config()
const express = require("express") 
const cors  = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())

const port = process.env.PORT

/*

Aquí invocamos las rutas

*/
// TODO localhost/api/_____

app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`Tu app está lista por http://localhost:${port}`)
})

dbConnect()
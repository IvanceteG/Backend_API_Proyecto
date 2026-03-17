import express from "express"
import 'dotenv/config.js'
import { connectDB } from "./config/db.js"

const app = express()
const PORT = process.env.PORT

// Middleware para parsear JSON
app.use(express.json())

// Conexión a la base de datos
connectDB()

console.log("Servidor iniciado")

// Ruta raíz
app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a mi API de prueba</h1>")
})

// Ruta de prueba en /api
app.get("/api/test", (req, res) => {
    res.json({
        ok: true,
        message: "La API está funcionando correctamente"
    })
})

// Arrancar servidor
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`)
})
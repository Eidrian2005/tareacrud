const express = require("express")
const app = express()
const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.listen(port, () => {
    console.log(`servidor corriendo en http://localhost:${port}`);
    
})


app.get("/registro", (req, res) => {
    const nombre = req.params.nombre
    const email = req.params.email
    res.json({nombre: nombre, email: email})
})


app.post("/registro", (req, res) => {
    const nombre = req.body.nombre
    const email = req.body.email
    res.send(`usuario ${nombre} y email ${email} registrados`)
})



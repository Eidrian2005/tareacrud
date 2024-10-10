const express = require("express")
const app = express()
const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => {
    console.log(`servidor corriendo en http://localhost:${port}`);
    
})


app.post("/registro", (req, res) => {
    const nombre =req.body.nombre
    const email = req.bodu.email
    res.send(`usuario registrado ${nombre}, ${email}`)
})


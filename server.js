const express = require("express");
const app = express();

app.use(express.json());

// Simulación de usuarios (datos en memoria)
const usuarios = [
    { id: 1, username: "usuario1", password: "1234", saldo: 1000 },
    { id: 2, username: "usuario2", password: "5678", saldo: 2000 }
];

// 🟢 Endpoint de Login (Simulación)
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const usuario = usuarios.find(u => u.username === username && u.password === password);

    if (!usuario) {
        return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    res.json({ mensaje: "Login exitoso", userId: usuario.id });
});

// 🟢 Endpoint para consultar saldo
app.get("/api/saldo/:id", (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);
    
    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({ saldo: usuario.saldo });
});

// 🟢 Endpoint para realizar una transferencia
app.post("/api/transferencia", (req, res) => {
    const { origen, destino, monto } = req.body;

    const usuarioOrigen = usuarios.find(u => u.id == origen);
    const usuarioDestino = usuarios.find(u => u.id == destino);

    if (!usuarioOrigen || !usuarioDestino) {
        return res.status(404).json({ error: "Uno o ambos usuarios no existen" });
    }

    if (usuarioOrigen.saldo < monto) {
        return res.status(400).json({ error: "Fondos insuficientes" });
    }

    usuarioOrigen.saldo -= monto;
    usuarioDestino.saldo += monto;

    res.json({ mensaje: "Transferencia realizada con éxito", saldoRestante: usuarioOrigen.saldo });
});

// 🟢 Iniciar el servidor solo si no está en modo de prueba
const PORT = process.env.PORT || 3000;
let server = null;

if (require.main === module) {
    server = app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
}

// ✅ Exportamos `app` y `server` (incluso si `server` es `null` en pruebas)
module.exports = { app, server };
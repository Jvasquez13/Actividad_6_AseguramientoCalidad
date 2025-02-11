const request = require("supertest");
const { app, server } = require("./server"); // Importamos `app` y `server`

describe("Pruebas de la API", () => {

    // 🔹 PRUEBA DE LOGIN
    test("POST /api/login - Credenciales correctas", async () => {
        const response = await request(app)
            .post("/api/login")
            .send({ username: "usuario1", password: "1234" });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("mensaje", "Login exitoso");
    });

    test("POST /api/login - Credenciales incorrectas", async () => {
        const response = await request(app)
            .post("/api/login")
            .send({ username: "usuario1", password: "wrongpass" });

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty("error", "Credenciales incorrectas");
    });

    // 🔹 PRUEBA DE CONSULTA DE SALDO
    test("GET /api/saldo/:id - Consultar saldo usuario existente", async () => {
        const response = await request(app).get("/api/saldo/1");

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("saldo", 1000);
    });

    test("GET /api/saldo/:id - Usuario no existente", async () => {
        const response = await request(app).get("/api/saldo/99");

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("error", "Usuario no encontrado");
    });

    // 🔹 PRUEBA DE TRANSFERENCIA
    test("POST /api/transferencia - Transferencia exitosa", async () => {
        const response = await request(app)
            .post("/api/transferencia")
            .send({ origen: 1, destino: 2, monto: 100 });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("mensaje", "Transferencia realizada con éxito");
        expect(response.body).toHaveProperty("saldoRestante", 900);
    });

    test("POST /api/transferencia - Fondos insuficientes", async () => {
        const response = await request(app)
            .post("/api/transferencia")
            .send({ origen: 1, destino: 2, monto: 20000 });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("error", "Fondos insuficientes");
    });

    test("POST /api/transferencia - Usuario destino no existente", async () => {
        const response = await request(app)
            .post("/api/transferencia")
            .send({ origen: 1, destino: 99, monto: 100 });

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("error", "Uno o ambos usuarios no existen");
    });

    // 🔹 Cerrar servidor después de pruebas (Solo si `server` está definido)
    afterAll(() => {
        if (server) {
            server.close();
        }
    });
});
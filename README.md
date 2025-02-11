# Actividad_6_AseguramientoCalidad

📍 Descripción del Proyecto

Este proyecto consiste en el diseño, implementación y ejecución de pruebas unitarias para una API en Node.js con Express. La API permite realizar operaciones básicas como autenticación de usuarios, consulta de saldo y transferencias de dinero. Las pruebas se desarrollaron utilizando Jest y Supertest.

🛠 Tecnologías Utilizadas

Node.js con Express para la API.

Jest como framework de pruebas unitarias.

Supertest para realizar pruebas de integración HTTP.

GitHub para la gestión del código y versionado.

🎯 Casos de Uso Probados

Caso de Uso

Descripción

Inicio de Sesión

Permite a un usuario autenticarse con usuario y contraseña.

Consulta de Saldo

Un usuario puede consultar su saldo actual.

Transferencia de Dinero

Permite realizar transferencias de dinero entre usuarios.

📌 Escenarios Cubiertos en las Pruebas Unitarias

Prueba

Resultado Esperado

Usuario con credenciales correctas inicia sesión

Retorna autenticación exitosa.

Usuario con credenciales incorrectas intenta iniciar sesión

Retorna error 401.

Usuario existente consulta saldo

Retorna el saldo disponible.

Usuario inexistente consulta saldo

Retorna error 404.

Transferencia válida entre usuarios

Retorna éxito y saldo actualizado.

Transferencia sin fondos suficientes

Retorna error 400.

Transferencia a usuario inexistente

Retorna error 404.

🚀 Cómo Ejecutar el Proyecto

1️⃣ Clonar el repositorio

git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>

2️⃣ Instalar dependencias

npm install

3️⃣ Ejecutar la API manualmente

node server.js

4️⃣ Ejecutar las pruebas unitarias

npm test

📂 Estructura del Proyecto

📦 AseguramientoCalidad
 ┣ 📂 node_modules/        # Dependencias
 ┣ 📜 server.js            # API principal
 ┣ 📜 server.test.js       # Pruebas unitarias
 ┣ 📜 package.json         # Configuración del proyecto
 ┣ 📜 README.md            # Documentación del proyecto

📌 Entrega Final

✅ Código subido en GitHub.✅ Pruebas unitarias implementadas y ejecutadas correctamente.✅ Documentación clara sobre los casos de uso y pruebas.✅ Video explicativo sobre el funcionamiento de la API y las pruebas.

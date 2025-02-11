# 📌 Proyecto de Pruebas Unitarias Actividad 6 - Aseguramiento de Calidad

## 📍 **Descripción del Proyecto**
Este proyecto consiste en el diseño, implementación y ejecución de **pruebas unitarias** para una API en **Node.js con Express**.  
La API permite realizar operaciones básicas como **autenticación de usuarios, consulta de saldo y transferencias de dinero**.  
Las pruebas se desarrollaron utilizando **Jest y Supertest** para validar el correcto funcionamiento de los endpoints.

---

## 🛠 **Tecnologías Utilizadas**
- 🟢 **Node.js** con **Express** para la API.
- 🛠 **Jest** como framework de pruebas unitarias.
- 🌐 **Supertest** para realizar pruebas de integración HTTP.
- 🔄 **GitHub** para la gestión del código y versionado.

---

## 🎯 **Casos de Uso Probados**
| Caso de Uso              | Descripción |
|--------------------------|-------------|
| **Inicio de Sesión**     | Permite a un usuario autenticarse con usuario y contraseña. |
| **Consulta de Saldo**    | Un usuario puede consultar su saldo actual. |
| **Transferencia de Dinero** | Permite realizar transferencias de dinero entre usuarios. |

---

## 📌 **Escenarios Cubiertos en las Pruebas Unitarias**
| 📝 Prueba | ✅ Resultado Esperado |
|-----------|----------------------|
| **Inicio de Sesión - Usuario válido** | Retorna autenticación exitosa con código `200`. |
| **Inicio de Sesión - Usuario incorrecto** | Retorna error `401` con mensaje de credenciales inválidas. |
| **Consulta de Saldo - Usuario existente** | Retorna el saldo actual con código `200`. |
| **Consulta de Saldo - Usuario inexistente** | Retorna error `404` indicando que el usuario no existe. |
| **Transferencia válida** | Realiza la transacción y actualiza saldo correctamente (`200`). |
| **Transferencia sin fondos suficientes** | Retorna error `400` indicando fondos insuficientes. |
| **Transferencia a usuario inexistente** | Retorna error `404` indicando que el destinatario no existe. |

---

## 🚀 **Cómo Ejecutar el Proyecto**
Sigue estos pasos para correr la API y ejecutar las pruebas unitarias.

### **1️⃣ Clonar el repositorio**
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>

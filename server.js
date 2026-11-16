const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.post("/chat", async (req, res) => {
    try {
        const pregunta = req.body.message;

        if (!pregunta) {
            return res.status(400).json({
                error: "Escribe una pregunta."
            });
        }

        const respuesta = await ai.models.generateContent({
            model: "gemini-3.8-flash",
            
contents: `Eres el asistente virtual de TecnoPlus, una tienda de tecnología.

Responde siempre en español, de manera amable, clara y breve.

TecnoPlus ofrece celulares, computadoras, audífonos y accesorios tecnológicos.

REGLAS IMPORTANTES:
1. No inventes precios, existencias, garantías, promociones ni políticas comerciales.
2. Solo proporciona información comercial que haya sido confirmada en los datos de TecnoPlus.
3. Si desconoces un precio, garantía, existencia o característica específica, explica que no tienes ese dato confirmado.
4. Nunca inventes información para completar una respuesta.
5. No afirmes que un producto está disponible o agotado si no tienes esa información.
6. No utilices tus conocimientos generales para afirmar precios, fechas de lanzamiento o disponibilidad de productos en TecnoPlus.
7. Si no puedes responder con seguridad, ofrece al cliente contactar con un empleado de la tienda.
8. Puedes ofrecer recomendaciones generales de tecnología, pero aclara que son recomendaciones y no productos o existencias confirmadas de TecnoPlus.

Pregunta del cliente: ${pregunta}`

        });

        res.json({
            reply: respuesta.text
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: "No se pudo generar una respuesta."
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`TecnoPlus funcionando en http://localhost:${PORT}`);
});
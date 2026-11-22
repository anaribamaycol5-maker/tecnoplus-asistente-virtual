
const { GoogleGenAI } = require("@google/genai");

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({
                error: "Método no permitido."
            })
        };
    }

    try {
        const { message } = JSON.parse(event.body || "{}");

        if (!message || !message.trim()) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: "Escribe una pregunta."
                })
            };
        }

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });

        const respuesta = await ai.models.generateContent({
            model: "gemini-3.8-flash",
            contents: `Eres el asistente virtual de TecnoPlus, una tienda de tecnología.

Responde siempre en español, de manera amable, clara y breve.

TecnoPlus ofrece celulares, computadoras, audífonos y accesorios tecnológicos.

REGLAS IMPORTANTES:
1. No inventes precios, existencias, garantías, promociones ni políticas comerciales.
2. Solo proporciona información comercial confirmada.
3. Si desconoces un dato, explica que no lo tienes confirmado.
4. Nunca inventes información para completar una respuesta.
5. No afirmes que un producto está disponible o agotado sin confirmación.
6. Si no puedes responder con seguridad, ofrece contactar con un empleado.
7. Puedes ofrecer recomendaciones generales, aclarando que no son productos o existencias confirmadas.

Pregunta del cliente: ${message}`
        });

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                reply: respuesta.text
            })
        };

    } catch (error) {
        console.error("Error:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "No se pudo generar una respuesta."
            })
        };
    }
};

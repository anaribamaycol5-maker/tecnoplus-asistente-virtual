
# TecnoPlus - Asistente Virtual

## Descripción
TecnoPlus es un asistente virtual desarrollado como proyecto académico para una tienda ficticia de tecnología. Su objetivo es ayudar a los clientes a consultar información sobre celulares, computadoras, audífonos y accesorios tecnológicos.

El asistente utiliza inteligencia artificial para interpretar las preguntas y responder en español utilizando un catálogo de productos de demostración.

## ¿Cómo se utiliza?
1. Ingresa al sitio web de TecnoPlus.
2. Escribe una pregunta en el cuadro de conversación.
3. Presiona el botón "Enviar".
4. El asistente procesará la consulta y mostrará una respuesta.

Se pueden realizar consultas sobre productos, precios, características y comparaciones del catálogo.

## Tecnologías utilizadas
- HTML: estructura de la interfaz.
- CSS: diseño visual.
- JavaScript: funcionamiento del chat.
- Node.js: ejecución del código del servidor.
- Netlify Functions: procesamiento de las consultas.
- Google Gemini API: generación de respuestas mediante inteligencia artificial.
- GitHub: almacenamiento y control de versiones.
- Netlify: publicación del proyecto en internet.

## Ejecución local

### Requisitos
- Node.js instalado.
- Una clave API de Google Gemini.
- Una cuenta de Netlify.

### Instalación
1. Clona o descarga este repositorio.
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Abre una terminal y ejecuta:

```bash
npm install
```

4. Configura la variable de entorno `GEMINI_API_KEY` con tu clave de Google Gemini.
5. Ejecuta el proyecto localmente con:

```bash
npx netlify dev
```

6. Abre en el navegador la dirección local que indique Netlify.

## Estructura del proyecto

- `public/index.html`: interfaz principal del asistente.
- `netlify/functions/chat.js`: función que procesa las preguntas y se comunica con Gemini.
- `package.json`: dependencias y configuración del proyecto.
- `netlify.toml`: configuración de Netlify.

## Consideraciones
Este proyecto tiene fines académicos. Los productos, precios y datos del catálogo son ficticios y se utilizan para demostrar el funcionamiento de un asistente virtual con inteligencia artificial.

La clave API debe mantenerse privada y configurarse mediante variables de entorno, nunca publicarse en el código fuente.

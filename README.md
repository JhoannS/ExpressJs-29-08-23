# Mapa conceptual acerca de Express Js y un ejemplo funcinoal

Es un proyecto que se creo desde VisualStudioCode donde se da como ejemplo el Framework Express Js, ademas con un mapa conceptual hablando del mismo.

## Estructura del Proyecto

Link de mapa conceptual: https://www.canva.com/design/DAFs8vC7kjQ/eqghKi3SUeyVJipEy4hHzg/view?utm_content=DAFs8vC7kjQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

Inicialmente se creo el proyecto con una carpeta en el escritorio, alli abrimos el terminal de la misma ruta y ejecutamos algunos comandos de Node Js:
- npm init --yes: iniciamos el node js y se crea el json de Express <br>
Seguidamente instalamos el Express Js:
- npm i express: comienza la instalacion de Express, adjunto con sus modulos <br>
- En la carpeta que creamos hace poco, creamos un archivo llamado "app.js" dentro de ella creamos unas constantes requiriendo el modulo de express: 
  - const express = require("express"); <br>
- Creamos el objeto de la aplicacion:
  - const app = express(); <br>
- ahora necesitamos que el servidor escuhe por algun puerto, usamos el objeto app y el metodo listen(), podemos poner el puerto 3000 y que muestre un mensaje cuando este corriendo:
  -  app.listen(3000, ()=>{
    console.log("el servido esta corriendo perfectamente en el localhost", 3000);
    }); <br>
- Lo probamos en el terminal:
  - node app.js
- Creamos un un idwalre para que pasemos la ruta principal:
  - app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
}) <br>

- Creamos un nuevo archivo index.html, en el cuerpo ponemos contenido que en este caso sera "Conexion exitosa con el servido :D"
- En el "app.js" creamos una constante llamada path que es un modulo de node js que vamos a requerir:
  - const path = require("path")
- Luego en "app.js" creamos un res con un metodo que ese metodo recibe como parametros, la ruta absoluta del html
  - app.get("/", (req, res)=>{
    // res.send("Hello world")
    res.sendFile(path.join(__dirname + "/index.html"));
}) <br>
## Dependencias

### Dependencias de Sistema
Visual Studio Code version 1.81.1 <br>
Canva 2023

## Contacto
Jhoann Sebastian Zamudio <br>
jszamudio35@soy.sena.edu.co <br>

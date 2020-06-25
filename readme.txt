/////////////////////////////////////////////////////
Test de empleo - Gueno Challenge (BACKEND)
Desarrollador: Boris Lopez - www.borisdev.com

DESARROLLO:
Proceso #1 //////////////////////////
1) Crear la carpeta del proyecto
2) Mediante el cmd npm init, inicializo el proyecto de node.js e instalo el manejador de paquetes de node Package.json
3) Mediante el cmd npm install express --save instalo el paquete para la creación e interacción con el servidor
4) Mediante el cmd npm install body-parser --save instalo la dependencia que me permitira manejar los cuerpo y contenido de las peticiones
5) Mediante el cmd npm install request --save instalo la dependencia que me permitira realizar peticiones http hacia la api de gueno
//////////////////////////

Proceso #2 //////////////////////////
1) Creo un archivo js llamado app.js donde importo los paquete de express, bodyparser y creo una ruta principal llamada /api, tambien hago la  configuracion del CORS.
2) Creo el index.js la cual sera el archivo principal del backend el que se inicializa, ahi importo express, creo el servidor y lo levanto.
3) Creo una carpeta controllers, la cual tendra un archivo llamado cuit.js que contendran las funciones que consumiran la api de gueno y devolveran los datos.
4) Creo una carpeta llamada Routes, la cual tendra un archivo llamado routes.js que contendran las rutas que llamaran a las funciones del controlador creado anteriormente.
5) Dichas rutas creadas (endpoints) seran las que consumiran el frontend que luego seran creado con Angular.


Proceso #3 /////////////////////////
1) Mediante Postman realizar peticiones al backend creado anteriormente y confirmar su funcionalidad.
2) Deploy del backend en Heroku, tambien en GitHub pero solo para revisión de codigo.

URL DEL BACKEND: https://backend-gueno.herokuapp.com/api
"use strict";
var app = require("./app");
// var port = 3700;


    //Settings
    app.set("port", process.env.PORT || 3000);
    //Creacion del servidor
    app.listen(app.get("port"), () => {
      console.log("Servidor corriendo corectamente en la url: localhost:3000");
    });

    

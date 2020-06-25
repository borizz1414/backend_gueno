"use strict";

var express = require("express");
var CuitController = require("../controllers/cuit");

var router = express.Router();

//rutas
router.get("/home", CuitController.home);
router.get("/cuit/:id", CuitController.getCuit);
router.get("/user/:cuit", CuitController.getUser);




module.exports = router;

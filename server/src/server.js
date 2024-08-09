const express = require("express");
const cors = require('cors');

// Importación de rutas
const Mercado_Pago = require("./router/Mercado_Pago_Router");

const server = express();

// proxy || middleware
server.use(express.json());
server.use(cors());
server.use("/Mercado_Pago", Mercado_Pago);

module.exports = server;
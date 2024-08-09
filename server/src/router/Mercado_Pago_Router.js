// Importaciones 
const { Router } = require("express");
const mercadopago = require("mercadopago");
const dotenv = require("dotenv");
dotenv.config();
const Mercado_Pago = Router();

//configuramos mercado pago 
mercadopago.configure({
  access_token: process.env.ACCESS_TOKE || "",
});

// Manejo de solicitud POST asingcorna 
Mercado_Pago.post("/", async (req, res) => {
  const producto = req.body;

  // Configuración de pago
  try {
    const preference = {
      items: [
        {
          title: producto.nombre,
          unit_price: producto.precio,
          currency_id: "ARS",
          quantity: producto.cantidad,
        },
      ],

      back_urls: {
        success: "http://localhost:5173/",
        failure: "http://localhost:4000/fallo",
      },

      auto_return: "approved",
    };

    // Retorno de errores
    const respuesta = await mercadopago.preferences.create(preference);
    console.log(respuesta);
    res.status(200).json(respuesta.response.init_point);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

module.exports = Mercado_Pago;
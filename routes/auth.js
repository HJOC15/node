const express = require("express");
const {loginCtrl, registerCtrl } = require("../controllers/auth");
const { validatorRegister, validatorLogin } = require("../validators/auth");
const router = express.Router();

/**
 * Route register new user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Registrar nuevo usuario"
 *          description: "Esta ruta es para registrar un nuevo usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authRegister"
 *          responses:
 *                  '201':
 *                      description: "El usuario se registra correctamente"
 *                  '403':
 *                      description: "Error al registrar el usuario"
 */

router.post("/register",validatorRegister,registerCtrl)

router.post("/login",validatorLogin,loginCtrl)


module.exports = router ;

 
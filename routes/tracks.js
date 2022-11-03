const express = require("express");
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/tracks");
const customHeader = require("../middleware/customHeader");
const { checkRol } = require("../middleware/rol");
const { authMiddleware } = require("../middleware/sesions");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router();

//TODO http://localhost/api/tracks GET,POST,DELETE,PUT

/**
 * Get all from tracks
 * @openapi
 * /tracks:
 *      get:
 *          tags:
 *              - tracks
 *          summary: "Todas las tracks"
 *          description: "Obtener todas las tracks "
 *          security:
 *              - bearerAuth: []
 *          responses:
 *                  '201':
 *                      description: "las tracks se obtuvieron"
 *                  '403':
 *                      description: "Error al obtener la data"
 */

router.get("/tracks", authMiddleware,getItems);

/**
 * Get details from tracks
 * @openapi
 * /tracks/{id}:
 *      get:
 *          tags:
 *              - tracks
 *          summary: "Detalle tracks"
 *          description: "Obtener el detalle de un track"
 *          security:
 *              - bearerAuth: []
 *          parameters:
 *          - name: id
 *            in: path
 *            description: ID de track a retornar
 *            required: true
 *            schema:
 *              type: string
 *          responses:
 *                  '201':
 *                      description: "El tracks se obtuvo"
 *                  '403':
 *                      description: "Error al obtener el track"
 */
router.get("/tracks/:id",authMiddleware,validatorGetItem,getItem);

 /**
 * update track
 * @openapi
 * /tracks/{id}:
 *      put:
 *          tags:
 *              - tracks
 *          summary: "actualizar  track"
 *          description: "Esta ruta es para actualizar la data de un track"
 *          security:
 *              - bearerAuth: []
 *          parameters:
 *          - name: id
 *            in: path
 *            description: ID de track a retornar
 *            required: true
 *            schema:
 *              type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/tracks"
 *          responses:
 *                  '201':
 *                      description: "El track se actualiza correctamente"
 *                  '403':
 *                      description: "Error al actualizar el track"
 */
router.put("/tracks/:id",authMiddleware,validatorGetItem,validatorCreateItem,updateItem);

/**
 * create new track
 * @openapi
 * /tracks:
 *      post:
 *          tags:
 *              - tracks
 *          summary: "Registrar nuevo track"
 *          description: "Esta ruta es para crear  un nuevo track"
 *          security:
 *              - bearerAuth: []
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/tracks"
 *          responses:
 *                  '201':
 *                      description: "El track se registra correctamente"
 *                  '403':
 *                      description: "Error al registrar el track"
 */
router.post("/tracks",authMiddleware,checkRol(["admin" , "user"]),validatorCreateItem,createItem);

/**
 * Delete details from tracks
 * @openapi
 * /tracks/{id}:
 *      delete:
 *          tags:
 *              - tracks
 *          summary: "Eliminar track"
 *          description: "elimina un track"
 *          security:
 *              - bearerAuth: []
 *          parameters:
 *          - name: id
 *            in: path
 *            description: ID de track a eliminar
 *            required: true
 *            schema:
 *              type: string
 *          responses:
 *                  '201':
 *                      description: "El track se elimino"
 *                  '403':
 *                      description: "Error al eliminar el track"
 */
router.delete("/tracks/:id",authMiddleware,validatorGetItem,deleteItem);

module.exports = router ;
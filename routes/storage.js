const express = require("express");
const { createItem, getItem, getItems, updateItem, deleteItem } = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const router = express.Router();


//TODO http://localhost/api/storage GET,POST,DELETE,PUT


/**
 * upload file to  storage
 * @openapi
 * /storage:
 *      post:
 *          tags:
 *              - storage
 *          summary: "upload storage"
 *          description: "subir archivo"
 *          security:
 *              - bearerAuth: []
 *          responses:
 *                  '200':
 *                      description: "El archivo se subio a storage "
 *                  '422':
 *                      description: "Error al subir el archivo a storage"
 *          requestBody:
 *              content:
 *                  multipart/form-data:
 *                    schema:
 *                      type: object
 *                      properties:
 *                          myfile:
 *                              type: string
 *                              format: binary
 */
router.post("/storage",uploadMiddleware.single("myfile"),createItem);

/**
 * Get all from storage
 * @openapi
 * /storage:
 *      get:
 *          tags:
 *              - storage
 *          summary: "Todos los archivos"
 *          description: "Obtener todos los detalles de storage"
 *          security:
 *              - bearerAuth: []
 *          responses:
 *                  '201':
 *                      description: "El storage se obtuvo"
 *                  '403':
 *                      description: "Error al obtener el storage"
 */
router.get("/storage",getItems)

/**
 * Get details from storage
 * @openapi
 * /storage/{id}:
 *      get:
 *          tags:
 *              - storage
 *          summary: "Detalle storage"
 *          description: "Obtener el detalle de un storage"
 *          security:
 *              - bearerAuth: []
 *          parameters:
 *          - name: id
 *            in: path
 *            description: ID de storage a retornar
 *            required: true
 *            schema:
 *              type: string
 *          responses:
 *                  '201':
 *                      description: "El storage se obtuvo"
 *                  '403':
 *                      description: "Error al obtener el storage"
 */
router.get("/storage/:id",validatorGetItem,getItem)

/**
 * Delete details from storage
 * @openapi
 * /storage/{id}:
 *      delete:
 *          tags:
 *              - storage
 *          summary: "Eliminar storage"
 *          description: "elimina un storage"
 *          security:
 *              - bearerAuth: []
 *          parameters:
 *          - name: id
 *            in: path
 *            description: ID de storage a eliminar
 *            required: true
 *            schema:
 *              type: string
 *          responses:
 *                  '201':
 *                      description: "El storage se elimino"
 *                  '403':
 *                      description: "Error al eliminar el storage"
 */
router.delete("/storage/:id",validatorGetItem,deleteItem)

module.exports = router; 
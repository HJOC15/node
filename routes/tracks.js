const express = require("express");
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/tracks");
const customHeader = require("../middleware/customHeader");
const { checkRol } = require("../middleware/rol");
const { authMiddleware } = require("../middleware/sesion");
const { validatorCreateItem } = require("../validators/tracks");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router();

//TODO http://localhost/api/tracks GET,POST,DELETE,PUT

//Lista items

router.get("/",authMiddleware,getItems);

//obtener un item
router.get("/:id",authMiddleware,validatorGetItem,getItem);

 //actualizar un item
 router.put("/:id",authMiddleware,validatorGetItem,validatorCreateItem,updateItem);

//crear items
router.post("/",authMiddleware,checkRol(["admin"]),validatorCreateItem,createItem);

//eliminar item
router.delete("/:id",authMiddleware,validatorGetItem,deleteItem);

module.exports = router ;
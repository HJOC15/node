const express = require("express");
const { getItems, createItem } = require("../controllers/tracks");
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/tracks");
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem } = require("../validators/tracks");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router();

//TODO http://localhost/api/tracks GET,POST,DELETE,PUT

//Lista items

router.get("/",getItems);

//obtener un item
router.get("/:id",validatorGetItem,getItem);

 //actualizar un item
router.put("/:id",validatorGetItem,validatorCreateItem,updateItem);

//crear items
router.post("/",validatorCreateItem,createItem);

//eliminar item
router.delete("/:id",validatorGetItem,deleteItem);

module.exports = router ;
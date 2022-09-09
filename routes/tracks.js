const express = require("express");
const { getItems, createItem } = require("../controllers/tracks");
const { validatorCreateItem } = require("../validators/tracks");
const router = express.Router();

//TODO http://localhost/api/tracks GET,POST,DELETE,PUT

router.get("/",getItems);

router.post("/",createItem);
router.post("/",validatorCreateItem,createItem);

module.exports = router ;
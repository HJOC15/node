const {tracksModel} = require('../models')
const {tracksModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const {matchedData} = require("express-validator");

/**
 * obtener lista base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getItems =  async (req,res) => {

    const data = await tracksModel.find({});

    res.send({data})
    try {
        const data = await tracksModel.find({});
        res.send({data})
    } catch (e) {
        handleHttpError(res,'ERROR_EN_GETITEMS')
    }



};

/**
 * Obtenet un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req,res) => {
};
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req,res) => {
    const {body} = req
    console.log(body);
    const data = await tracksModel.create(body)
    res.send({data})


    try {
        const body = matchedData(req);
        const data = await tracksModel.create(body)
        res.send({data})
    } catch (e) {
        handleHttpError(res,'ERROR_EN_CREARITEMS')
    }



};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req,res) => {
};
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req,res) => {
};
module.exports = {getItems,getItem,createItem,updateItem,deleteItem} ; 
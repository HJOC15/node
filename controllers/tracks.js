const {tracksModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const {matchedData} = require("express-validator");

/**
 * obtener lista base de datos
 * @param {*} req 
 * @param {*} res 
 */


const getItems =  async (req,res) => {

    try {
        const user  = req.user;
        const data = await tracksModel.findAllData({});
        console.log(data);
        res.send({data,user})
    } catch (e) {
        handleHttpError(res,'ERROR_EN_GETITEMS')
    }

    

};

/**
 * Obtenet un detalle
 * @param {*} req 
 * @param {*} res 
 */

const getItem = async (req,res) => {

    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findOneData(id);
        res.send({data})
    } catch (e) {
        handleHttpError(res,"Error_Get_Item")
    }

};

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req,res) => {


    try {
        const body = matchedData(req);
        console.log(body);
        const data = await tracksModel.create(body)
        res.send({data})
    } catch (e) {
        console.log(e)
        handleHttpError(res,'ERROR_EN_CREARITEMS')
    }

    

};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */

const updateItem =  async (req,res) => {

    try {
        const {id, ...body} = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(
            id,body
        )
        res.send({data})
    } catch (e) {
        handleHttpError(res,'ERROR_EN_UPDATE_ITEMS')
    }

};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */

const deleteItem =  async (req,res) => {

    try {
        req = matchedData(req);
        const {id} = req;
        const trackData = await tracksModel.delete({_id:id});
        const data = {
            trackData,
            deleted:1
        }
        res.send({data})
    } catch (e) {
        handleHttpError(res,"Error_Eliminado_Item")
    }

};

module.exports = {getItems,getItem,createItem,updateItem,deleteItem} ; 
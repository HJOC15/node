const {handleHttpError} = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJWT");
const {userModel} = require('../models');
const { matchedData } = require("express-validator");

const authMiddleware = async (req,res,next) =>{
    try {

        if(!req.headers.authorization){
            handleHttpError(res,"NOT_TOKEN",401)
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);


        const user = await userModel.findById(dataToken._id)
        req.user = user

        next()

    } catch (e) {
        handleHttpError(res,"NOT_SESSION",401);
    }
}

module.exports = {authMiddleware}
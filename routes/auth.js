const express = require("express");
const {matchedData} = require("express-validator");
const {userModel} = require("../models")
const {encrypt,compare} = require("../utils/handlePassword")
const { validatorRegister, validatorLogin } = require("../validators/auth");
const router = express.Router();

router.post("/register",validatorRegister, async (req,res) =>{
    req = matchedData(req);
    const passwordHash = await encrypt(req.password)
    const body = {...req,password:passwordHash}
    const data = await userModel.create(body)
    data.set('password',undefined,{strict:false})
    res.send({data})
})
module.exports = router ;
const bcryptjs = require("bcryptjs");
/**
 * contraseña sin encriptar
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) =>{
    const hash = await bcryptjs.hash(passwordPlain,10)
    return hash;
};
/**
 * pasar contrase;a sin encriptar y contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain,hashPassword) => {
    console.log(passwordPlain)
    console.log(hashPassword)
    return await bcryptjs.compare(passwordPlain,hashPassword)
}

module.exports = {encrypt,compare}
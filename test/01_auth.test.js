const request  = require("supertest")
const app =  require("../app")
const {userModel} = require("../models")

const testAuthLogin = {
    email : "elxd@gmail.com",
    password: "12345"
}

const testAuthRegister = {
    name: "Rigoberto",
    age: 20,
    email: "elxd@gmail.com",
    password: "12345"
}

/**
 *  Se va ejecutar antes de las pruebas
 */
beforeAll( async () =>{
    await userModel.deleteMany();
})


describe("[AUTH] esta es la prueba de /api/auth", () => {




    test("esto deberia de retornar un 404 el usuario no existe", async () =>{

        const response = await request(app)
        .post('/api/login')
        .send(testAuthLogin)
        expect(response.statusCode).toEqual(404)
    });

    
    test("esto deberia de retornar un 201 creado con exito", async () =>{

        const response = await request(app)
        .post('/api/register')
        .send(testAuthRegister)
        
        expect(response.statusCode).toEqual(201)
        expect(response.body).toHaveProperty("data");
        expect(response.body).toHaveProperty("data.token");
        expect(response.body).toHaveProperty("data.user");
    })


    
    test("esto deberia de retornar un 401 password invalido", async () =>{
        const newTestAuthLogin = {...testAuthLogin, password:"22222222"}
        const response = await request(app)
        .post('/api/login')
        .send(newTestAuthLogin)
        expect(response.statusCode).toEqual(401)
    });


    test("esto deberia de retornar un 200 loggin correcto", async () =>{

        const response = await request(app)
        .post('/api/login')
        .send(testAuthLogin)
        expect(response.statusCode).toEqual(200)
    });




})
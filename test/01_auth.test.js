const request = require("supertest")
const app = require("../app")

const testAuthLogin= {
    "email": "test@test.ni",
    "password": "123456"
}

const testAuthRegister= {
    "name": "User Test",
  "age": 20,
  "email": "test2@test2.ni",
  "password": "123456"
}

describe("[AUTH]Esta es la prueba de /api/auth", () =>{
    test("Esto debería retornar 404", async () =>{
        const response = await request(app)
        .post('/api/auth/login')
        .send(testAuthLogin)

        expect(response.statusCode).toEqual(404)
    })
})

test("Esto debería retornar 201", async () =>{
    const response = await request(app)
    .post('/api/auth/register')
    .send(testAuthRegister)

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("data")
    expect(response.body).toHaveProperty("data.token")
    expect(response.body).toHaveProperty("data.user")
})
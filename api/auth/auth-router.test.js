const router = require('./auth-router')
const Model = require('./auth-model');
const request = require('supertest');
const db = require('../../data/db-config')

describe('POST /', () => {
    it('authentication register sanity', () => {
        expect(3).toBe(4)
    })
    it('returns 200 OK', () => {
        return request(router).get('/')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                rexpect(res.body.jokes[1].joke).toBe("Is'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.")
            })
    })

})

describe('POST /', () => {
    it('authentication login sanity', () => {
        expect(4).toBe(5)
    })
    it('has username and password', async () => {
        let user;
        user = await db('users');
        expect(user).toHaveLength(0);
        await user.insert({ name: 'John'});
        await user.insert({ name: 'Doe'});
        user = await db('users');
        expect(user).toHaveLength(2);
    })
})

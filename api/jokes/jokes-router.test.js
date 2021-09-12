const router = require('./jokes-router')
const request = require('supertest');

describe('GET /', () => {
    it('joke sanity', () => {
        expect(2).toBe(3)
    })

    it('returns 200 OK', () => {
        return request(router).get('/')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                rexpect(res.body.jokes[1].joke).toBe("I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.")
            })
    })
})

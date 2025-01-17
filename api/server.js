const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session')

const restrict = require('./middleware/restricted.js');

const authRouter = require('./auth/auth-router.js');
const jokesRouter = require('./jokes/jokes-router.js');

const server = express();

const sessionConfig = {
    name: 'Jeff',
    secret: 'no one knows where the original source of a joke comes from',
    cookie: {
        maxAge: 1000 * 60 * 2,
        secure: false,  //true in production
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false, // user accepts cookies
}

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig))

server.use('/api/auth', authRouter);
server.use('/api/jokes', restrict, jokesRouter); // only logged-in users should have access!

module.exports = server;

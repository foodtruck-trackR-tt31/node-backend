const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const dinersRouter = require('../diners/diners-router');
const trucksRouter = require('../trucks/trucks-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/diners', dinersRouter);
server.use('/api/trucks', trucksRouter);

server.get('/', (req, res) => {
  res.send('Server running...');
});

module.exports = server;
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
const express = require('express');

const server = express();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

server.listen = server.listen.bind(server, PORT, () => console.log(`this shit is up and running on: localhost:${PORT}`));

// eslint-disable-next-line no-undef
module.exports = server;
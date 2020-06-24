const helmet = require('helmet');
const cors = require('cors');
const express = require('express');
const basicAuth = require('express-basic-auth');

module.exports = server => {
    // Use the cors middelware
    server.use(cors());

    // Use the helmet middleware
    server.use(helmet());

    // Apply basic authentication - checks req authentication header
    server.use(
        basicAuth({
            users: {
                admin: 'cRYP70N'
            },
            challenge: true
        })
    );

    // Set up the body parser to handle the request with JSON body
    server.use(express.json());
};
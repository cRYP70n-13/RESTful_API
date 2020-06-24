const defaultMiddleware = require('./default');
const { defaultConfiguration } = require('../config/express-server');

// Register all the middlewares
module.exports = function registerMiddleware(server) {
    defaultMiddleware(server);
};
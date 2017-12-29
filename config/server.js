#!/usr/bin/env node

/**
 * web服务器配置
 */

/**
 * Module dependencies.
 */

var debug = require('debug')('test4:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var app = '',
    port = '';
if (process.env.NODE_ENV === 'development') {
    // dev
    app = require('./../build/webpack.dev.conf.js');
    port = parseInt(process.env.PORT, 10) || 3000;
} else if (process.env.NODE_ENV === 'production') {
    // prod
    app = require('./../build/webpack.prod.conf.js');
    port = parseInt(process.env.PORT, 10) || 3006;
} else {
    // 防止出错
    app = require('./../build/webpack.dev.conf.js');
    port = parseInt(process.env.PORT, 10) || 3008;
}

app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error('Port ' + port + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('Port ' + port + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    debug('Listening on port ' + server.address().port);
}

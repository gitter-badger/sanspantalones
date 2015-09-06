var express = require('express');
var livereload = require('connect-livereload');

require('./modules/environmentals.js');

var config = require('./config.js')

var server = express();

if (SP_ENVIRONMENT === 'local') {
    server.use(livereload());                   //this must be call before the serving of any static files
}

server.use(express.static(config.folders.dist));

server.listen(SP_PORT, function () {
    console.log('Sans Pantalones server running on port', SP_PORT);
});
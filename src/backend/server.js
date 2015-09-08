var express = require('express');

var config = require('./server-config.js')
var server = express();

if (SP_ENVIRONMENT === 'local') {
    server.use(require('connect-livereload')());   //this will be manually injected                     //this must be call before the serving of files
}

server.use('/', express.static(config.folder.dist));
server.use('/bower_components', express.static(config.folder.bower));
server.use('/*', express.static(config.file.index));                    //this is needed to remove hash from url
    
server.listen(SP_PORT, function () {
    console.log('Server online. Port:', SP_PORT, ' Environment:', SP_ENVIRONMENT);
});
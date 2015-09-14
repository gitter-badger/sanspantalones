var express     = require('express');
var bodyParser  = require('body-parser');


var config = require('./server-config.js')
var server = express();

require('./routes/routes.js')(server);

server.use(bodyParser.json());                                          // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({ extended: true }));                  // to support URL-encoded bodies

if (SP_ENVIRONMENT === 'local') {
    server.use('/bower_components', express.static(config.folder.bower));
    server.use('/img', express.static(config.folder.img));              
}

//this must be last!!!!!
server.use('/', express.static(config.folder.dist));
server.use('/*', express.static(config.file.index));                    //this is needed to remove hash from url

server.listen(SP_PORT, function () {
    console.log('Server online. Port:', SP_PORT, ' Environment:', SP_ENVIRONMENT);
});
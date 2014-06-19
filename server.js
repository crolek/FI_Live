//==================
// Modules
//==================
var config = require('config'),
    express = require('express'),
    stylus = require('stylus'),
    nib = require('nib'),
    path = require('path'),
    fs = require('fs');

//==================
// Initialization
//==================
var app = express();

//==================
// Configuration
//==================
app.set('port', config.port);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use( require('body-parser')() );

//==================
// Middleware
//==================

app.use( require('./router') );

app.use(stylus.middleware({
    src: __dirname + '/app',
    dest: __dirname + '/public',
    debug: true,
    force: true,
    compile: function(str, path) {
        return stylus(str)
            .set('filename', path)
            .use( nib() )
            .import('nib')
            .import('includes/vars')
            .import('includes/mixins');
    }
}));

app.use(express.static(path.join(__dirname + '/public')));


//==================
// Level Config
//==================
if(config.env == 'production') {
    app.use( require('errorhandler')() );
}
else {
    app.use( require('morgan')() );
    app.use( require('errorhandler')({ dumpExceptions: true, showStack: true }));
    app.locals.pretty = true;
}

//==================
// Start Server
//==================
app.listen(config.port, function () {
    console.log("Express server listening on port %d in %s mode", config.port, config.env);
});
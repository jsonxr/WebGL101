'use strict';
// core
var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index')
var app = express();

app.use(serveStatic(__dirname));
app.use(serveIndex(__dirname));

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening at http://localhost:" + port);
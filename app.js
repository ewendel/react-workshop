var express = require('express');
var app = express();
var path = require('path');

var port = 3000;

// app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'tasks'))); //  "public" off of current is root
app.use('/solutions', express.static(path.join(__dirname, 'solutions')));

app.listen(port, function() {
    console.log('The tasks server has been started on port ' + port);
});

// require the basic npm packages
//   express, body-parser and path.

var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var app = express();
// app.use(express.static());

var PORT = process.env.PORT || 3000;
app.use(express.static('app/public'))
// app.use('/public', express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// app.use(express.static(__dirname + '/public'));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
}); 
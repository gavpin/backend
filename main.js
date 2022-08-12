const customer = require("./customer");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

app = express(); // this an instance of express web server app - espress is a webserver - we r creating a webserver here
app.use(cors());
app.use(bodyparser.json());

app.use(customer.router);

app.listen(3000); // use port 3000, i.e. don't use default html port (80) 
// (normally we don't put 80 as its the default port and auto used by the bowser)
// to test out http://localhost:3000 in broswer .. should get message "Cannot GET /"

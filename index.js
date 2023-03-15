const express = require("express");
const bodyParser = require("body-parser");
const routeList = require("express-routes-catalogue");
const flowManagement = require('./src');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api", flowManagement);

app.listen(3000, () => {
    console.log("Flow API is ready on port: " + "3000");
  });

routeList.default.terminal(app);
module.exports = app;
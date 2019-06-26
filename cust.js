var express = require('express');
var app = express();


var customersController=function(req, res){
  console.log("Invoking  rest api for product list");
  var customers = [
    {customer_id:101, customer_name:"abc",customer_email:"abc@gmail.com",customer_mobile:123478,customer_address:"pune"},
    {customer_id:102, customer_name:"xyz",customer_email:"xyz@gmail.com",customer_mobile:123478,customer_address:"mumbai"},
   
  ];
  res.send(customers);
};


app.get ('/customers',customersController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})
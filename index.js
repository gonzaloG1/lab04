var express = require('express');
var app = express();

app.get('/clientes', c_cliente);
app.get('/productos', c_producto);

function c_cliente(req,res){
    res.setHeader('Content-type','text/html')
    res.send('<h1>Bienvenidos nuevos clientes</h1><table class="egt" border="1"><tr> <td>Nombres y apellidos</td><td>Compra</td><td>Cantidad</td></tr><tr><td>Mario salas</td><td>Playstation5</td><td>5</td></tr></tr><tr><td>Juan García</td><td>Xbox series x</td><td>3</td></tr></tr><tr><td>Christian Quispe</td><td>Nintendo Switch</td><td>10</td></tr></table>')
}

function c_producto(req,res){
    
    res.send('<h1>Nuestros productos</h1><table class="egt" border="1"><tr> <td>Productos</td><td>Precio</td><td>Tienda</td></tr><tr><td>Playstation 5</td><td>1500</td><td>Hiraoka</td></tr></tr><tr><td>Xbox series x</td><td>1400</td><td>Coolbox</td></tr></tr><tr><td>Nintendo Switch</td><td>1000</td><td>Nintendo shop</td></tr></table>')
    
}

function c_serve(req,res){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ':' +port);
}

var server = app.listen(8000,c_serve);
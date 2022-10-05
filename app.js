var express = require("express");
var router=express.Router();
var bodyParser  = require("body-parser");
var app = express();
var usuarios=require("./routes/rutasUsuario");
router.get('/', function(request, response) {  
   response.status(200).json({"mensaje":"Sacala la cawuama nodejs"});
});
app.use(bodyParser.json()); 
//incluimos el archivo en el que se almacenan las rutas de cada entidad
app.use(router);  
app.use(usuarios);
 

app.listen(5000, function() { 
console.log("Servidor iniciado");
});
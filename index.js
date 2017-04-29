const express = require('express');
const app = express();
const Rutas = require('./routes/routes');
//const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const jade = require('jade');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');


let port = process.env.PORT || 3000;

app.set('views' , './views');
app.set('view engine', 'jade');
app.use(express.static('./static'));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.use(formidable({
	encoding: 'utf-8',
  	uploadDir: './static/images',
  	keepExtensions : true,
  	multiples: true
}));

app.use('/', Rutas); // al final de los set y use para config modulos y express

mongoose.connect('mongodb://joaquin:1234@ds123371.mlab.com:23371/tallernode', (err) => {
	if (err) {
		console.log(err);
	}
	else{
		console.log('conexion exitosa a la db, men');
	}
});

cloudinary.config({ 
  cloud_name: 'dk47n29zo', 
  api_key: '554798757335243', 
  api_secret: '_VcwLQ0laYWv-duDr0vOTzJRiL4' 
});

app.listen(port, err => {
	if(err) {
		console.log(err) }
	else {
		console.log(`server running on port ${port} OK!`) // comillas ´´ pasan variables
	}
	
});



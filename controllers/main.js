const producto = require('.././models/Product');
const cloudinary = require('cloudinary');

exports.init = (req,res) => {

		producto.find((err,response)=>{
			if (err) {
				console.log(err);
			}
			else {
				res.render('index',{product: response})
			}
		});
}

exports.admin = (req,res) => {
		res.render('admin')
}

exports.create = (req,res) => {

	cloudinary.uploader.upload(req.files.fileimage.path, function(result) { 
   
		let data = new producto({
			name: req.fields.name,
			price: req.fields.price,
			img: result.url,
			description: req.fields.description,
			date: new Date()
		})		

	data.save((err,response)=>{
		if (err) {
			console.log(err);
		}
		else{
			res.redirect('/');
		}

	})
});
}
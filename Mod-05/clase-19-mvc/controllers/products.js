const path = require('path');

const controller = {
	products: (req, res) => {
		const htmlPath = path.resolve(__dirname, '../views/products.html');
		return res.sendFile(htmlPath);
	},

	create: (req, res) => {
		return res.send('Crear un producto');
	}, 
	
	show: (req, res) => {
		return res.send('Estás viendo el producto con ID:' + req.params.id);
	}, 
}

module.exports = controller;
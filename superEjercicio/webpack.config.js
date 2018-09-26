const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		app: './src/app.js'
	},

	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.validator.js'
	}

};

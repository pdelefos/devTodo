const path = require('path')

module.exports = {
	entry: "./src/entry.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				include: /src/,
				loader: "style-loader!css-loader",
			},
			{
				test: /\.jsx?$/,
				include: /src/,
				loader: "babel-loader",
			}
		]
	}
}
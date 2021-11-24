const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [new HtmlWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.(png|jpe?g)$/,
				type: 'asset'
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		]
	},
	performance: {
		maxAssetSize: 1024 * 1024
	},
};

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/app/ts/index.ts'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ManifestPlugin()
	],
	output: {
		filename: '[name].[hash].bundle.js',
		path: path.resolve(__dirname, 'dist/app')
	},
};

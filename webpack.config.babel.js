import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import webpack from 'webpack';

export default () => ({
	resolve: {
		extensions: [ '*', '.js', '.jsx', '.json']
	},
	entry:{ bundle: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		path.join(__dirname, 'src/client/index.jsx'),
	]},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js',
	},
	devtool: 'eval-source-map',
	target: 'web',
	plugins: [
		new HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: './src/client/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true
			},
			inject: true
		}),
	],
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|gif)$/i,
				use: [
					{ loader: 'file-loader?name=[name].[ext]' }
				]
			},
			{
			   	test: /\.css$/,
			   	loader: 'style-loader!css-loader'
			},
			{
				test: /\.ico$/,
				use: [
					{ loader: 'file-loader?name=[name].[ext]' }
				]
			},
			{
				test: /\.eot(\?v=\d+.\d+.\d+)?$/,
				use: [
					{ loader: 'file-loader' }
				]
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{ loader: 'url-loader?limit=10000&mimetype=application/font-woff' }
				]
			},
			{
				test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
				use: [
					{ loader: 'url-loader?limit=10000&mimetype=application/octet-stream' }
				]
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{ loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
				]
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				include: path.join(__dirname, 'src'),
				use: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: false,
							presets: [
								['es2015', { modules: false }],
								'react',
								'stage-2'
							],
							plugins: ['react-hot-loader/babel'],
						}
					}]
			}
		]
	},
	devServer: {
		hot: true,
		historyApiFallback: true
	},
});

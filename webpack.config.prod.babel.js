import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('production'),
	__DEV__: false
};

export default {
	resolve: {
		extensions: ['*', '.js', '.jsx', '.json']
	},
	devtool: 'source-map',
	entry:  path.join(__dirname, 'src/client/index.jsx'),
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		new WebpackMd5Hash(),
		//tells React to build in production mode
		new webpack.DefinePlugin(GLOBALS),
		// Generate an external css file with a hash in the filename
    	new ExtractTextPlugin('[name].[contenthash].css'),

    	new HtmlWebpackPlugin({
		template: 'src/client/index.html',
			// favicon: 'src/favicon.ico',
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true
		},
		inject: true,
			// Note that you can add custom options here if you need to handle other custom logic in index.html
			// To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
		trackJSToken: ''
	    }),
	     // Minify JS
    	new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    	new webpack.LoaderOptionsPlugin({
		minimize: true,
		debug: false,
		noInfo: true, // set to false to see a list of every file being bundled.
		options: {
			sassLoader: {
				includePaths: [path.resolve(__dirname, 'src/client', 'scss')]
			},
			context: '/',
			postcss: () => [autoprefixer],
		}
	    })
	],
	module: {
		rules: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?name=[name].[ext]'},
			{test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]'},
			{test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]'},
			{test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]'},
			{test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
			{test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
			{test: /(\.css|\.scss|\.sass)$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!sass-loader?sourceMap')}

		]
	}

};

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack'; 
import webpack from 'webpack';
const defaultEnv = {  
    dev: true,
    production: false,
};


export default (env = defaultEnv) => ({ 
  resolve: {
    extensions: [ '.js', '.jsx', '.json']
  },
  entry: [
    ...env.dev ? [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
    ] : [],
    path.join(__dirname, 'src/client/index.jsx'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: env.dev ? 'source-map' : false, 
  plugins: [
    ...env.dev ? [
      // Webpack Development Plugins
      new HotModuleReplacementPlugin(),
    ] : [
       new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true,
        compress: { warnings: false }
    })
    ],
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/client/index.html'
    }),
  ],
  module: {
    rules: [
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
                ],
              plugins: ['react-hot-loader/babel'],
              }
            }
          ]
        }
    ]
  },
  devServer: {
    hot: env.dev,
  },
}); 

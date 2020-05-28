const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/src'
    },
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions:{
                                indentWidth: 4,
                            }
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader'] 
            },
            {
                test: /\.(jpg|png)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }

        ]
    },
    optimization:{
            minimizer: [new UglifyJsPlugin()],
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin()
    ], 
}
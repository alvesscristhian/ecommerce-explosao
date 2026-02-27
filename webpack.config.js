const { type } = require('os');
const path = require('path'); // CommonJS = Padrão Node.js

module.exports = {
    mode: 'development',
    entry: './frontend/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            useBuiltIns: 'usage',
                            corejs: 3
                        }]
                    ]
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
            generator: {
                filename: '../img/[name][hash][ext]',
            },
        }
        ]
    },
    devtool: 'source-map'
};

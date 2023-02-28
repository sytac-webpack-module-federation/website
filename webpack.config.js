const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/dist',
    },
    devServer: {
        port: 3003,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new ModuleFederationPlugin({
            name: 'website',
            filename: 'remoteEntry.js',
            // exposes: {
            //     './Signup': './src/Signup.js',
            // },
            remotes: {
                homepage: "homepage@https://sytac-webpack-module-federation.github.io/homepage/remoteEntry.js",
                signup: "signup@https://sytac-webpack-module-federation.github.io/signup/remoteEntry.js",
            },
            shared: {
                react: {singleton: true},
                "react-dom": {singleton: true},
                "react-router-dom": {singleton: true}
            }
        }),
    ],
};
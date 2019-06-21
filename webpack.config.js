var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin')
var hwp = new htmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [hwp]
}


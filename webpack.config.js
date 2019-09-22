const path = require('path');

module.exports = {
    entry: './src/assets/js/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'assets/js/app.bundle.js'
    },
    mode: 'development'
};
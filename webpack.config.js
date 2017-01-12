module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'application.js',
        path: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }],
            }
        ]
    }
}

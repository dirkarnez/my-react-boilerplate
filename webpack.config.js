const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: path.join(__dirname, 'app', 'App'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
        {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              camelCase: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
                plugins: function () {
                    return [autoprefixer]
                }
            }
          }
        ]
      }
    ]
  }
};
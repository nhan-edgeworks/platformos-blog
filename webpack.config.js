const path = require('path');
const theme_path = './modules/dashboard_blog/public/views/partials/themes/';

module.exports = {
  entry: {
    app: './src/app.js',
    'themes/blog2': theme_path + 'blog2/assets/theme.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'marketplace_builder/assets')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
    },]
  },
  node: {
    fs: "empty"
  }
};

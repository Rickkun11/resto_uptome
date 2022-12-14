const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components|run\/tasks\/test\/wrapper\.js)/,
          loader: 'babel',
        },
        {
            loader: 'sass-loader',
            test: /\.scss$/,
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
              'file-loader',
          ],
        },
    ],
},
plugins: [
  
    ],
resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
        SharedStyles: path.resolve(__dirname, '../styles/main.scss'),
        SharedComponents: path.resolve(__dirname, '../scripts/index.js'),
    },
},
  module: {
    
    rules: [
      {
      test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],  
      },
      
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};

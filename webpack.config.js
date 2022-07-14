const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
    entry: './src/index.js',
    mode: `development`,
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
    module:{
      rules:[
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "imgs"
              }
            }
        },
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
        {
          test: /\.scss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin ({
        title: `webPack App`,
        filename: `index.html`,
        template: `src/template.html`
      })
    ]

  };
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/js/index.js")
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(svg|png|jpe?g|gif|eot|woff|woff2|ttf|json)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: path.resolve(__dirname, "src/"),
              outputPath: "public/",
              publicPath: "../",
              useRelativePaths: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/img/*", to: "img/[name][ext]" }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./src/index.html")
    })
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: false,
    contentBase: "./public",
    inline: true,
    port: 4000
  }
};

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      // {
      //   test: /\.(ts|js)x?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [
      //         "@babel/preset-env",
      //         "@babel/preset-react",
      //         "@babel/preset-typescript",
      //       ],
      //     },
      //   },
      // },
      {
        test: /\.css$/,
        use : [
            {
                    loader: 'style-loader',
            },
            {
                    loader: 'css-loader',
                    options: {
                            sourceMap: true,
                    }
            }
        ]
}
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
};

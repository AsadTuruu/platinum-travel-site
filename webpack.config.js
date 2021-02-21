const { watch } = require("fs");
const path = require("path");
module.exports = {
    mode: 'development',
    entry: "./app/assets/scripts/App.js",
    output: {
        filename: "bundles.js",
        path: path.resolve(__dirname, "app")
    },
    watch: true,
       module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [
                      require("postcss-import"),
                      require("postcss-simple-vars"),
                      require("postcss-nested"),
                      require("autoprefixer"),
                      require("postcss-mixins"),                       
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
}
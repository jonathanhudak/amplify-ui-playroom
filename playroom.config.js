module.exports = {
  components: "@aws-amplify/ui-react",
  outputPath: "./docs",

  // Optional:
  title: "Amplify UI Components",
  frameComponent: "./playroom/FrameComponent.js",
  widths: [1024],
  port: 9000,
  openBrowser: true,
  paramType: "search", // default is 'hash'
  baseUrl:
    process.env.NODE_ENV === "production" ? "/amplify-ui-playroom/" : "/",
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /@aws-amplify.*\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  }),
  iframeSandbox: "allow-scripts",
};

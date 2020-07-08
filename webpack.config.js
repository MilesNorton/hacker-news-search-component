const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path')
module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "kuttle",
    projectName: "hacker-news-search",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    entry: './src/spa-entry.tsx', /** entry file location */
    output: {
      filename: 'hacker-news-search-client.js', /** customise output name */
      publicPath: '/',
    },
    resolve: {
      plugins: [new TsconfigPathsPlugin()]
    }
  });
};

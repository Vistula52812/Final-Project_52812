const merge = require('webpack-merge');
const flowDefaults = require('./webpack.generated.js');

/**
 * To change the webpack config, add a new configuration object in
 * the merge arguments below:
 */
module.exports = merge(flowDefaults,
  // Override default configuration
  // {
  //   mode: 'development',
  //   devtool: 'inline-source-map',
  // },

  // Add a custom plugin
  // (install the plugin with `npm install --save-dev webpack-bundle-analyzer`)
  // {
  //   plugins: [
  //     new require('webpack-bundle-analyzer').BundleAnalyzerPlugin({
  //       analyzerMode: 'static'
  //     })
  //   ]
  // },
);

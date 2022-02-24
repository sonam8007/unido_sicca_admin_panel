const { useBabelRc, override, useEslintRc, addBundleVisualizer, addWebpackPlugin } = require('customize-cra')

module.exports = override(
 useBabelRc(),
 useEslintRc(),
 process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer()
)


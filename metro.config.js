/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname, {
  // Initialize in exotic mode.
  // If you want to preserve `react-native` resolver main field, and omit cjs support, then leave this undefined
  // and skip setting the `EXPO_USE_EXOTIC` environment variable.
  mode: "exotic",
});

// Use the new transformer
// baseConfig.transformer.babelTransformerPath = require.resolve('./metro-exotic-transformer');

// Optionally, you can add support for the `react-native` resolver field back
// doing this will increase bundling time and size as many community packages ship untransformed code using this feature.
// Other packages like `nanoid` use the field to support `react-native` so you may need to enable it regardless.
// defaultConfig.resolver.resolverMainFields.unshift('react-native');

module.exports = defaultConfig;

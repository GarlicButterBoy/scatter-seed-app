module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module:react-native-dotenv",
        {
          allowUndefined: true,
          moduleName: "react-native-dotenv",
        },
      ],
      ["react-native-paper/babel"],
    ],
  };
};

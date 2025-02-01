module.exports = function (api) {
    api.cache(true);
    return {
      presets: 
      [
        ["babel-present-expo", { jsxImportSource: "nativewind"}],
        "nativewind/babel"
      ],
    };
  }
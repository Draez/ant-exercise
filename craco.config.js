const CracoAntDesignPlugin = require("craco-antd");
const colors = require("./src/colors");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          // -------- Colors -----------
          "@primary-color": colors.blue10,
          "@red-base": "rgba(231, 35, 71, 1)",
          "@gold-base": "rgba(250, 173, 20, 1)",
          "@green-base": "rgba(82, 196, 26, 1)",

          // -------- Tooltip -----------
          "@tooltip-bg": colors.gray09,

          // -------- Button -----------
          "@btn-primary-bg": colors.blue10,
          "@btn-primary-color": "#fff",
          "@btn-border-radius-base": "50px",
          "@btn-border-radius-sm": "50px",

        },
      },
    },
  ],
};

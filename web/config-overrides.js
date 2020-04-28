const {
    override,
    fixBabelImports,
    // addLessLoader,
    addDecoratorsLegacy,
   } = require("customize-cra");
    
   module.exports = override(
    fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
    }),
    addDecoratorsLegacy(),
    // addLessLoader({
    // javascriptEnabled: true,
    // // modifyVars: { "@primary-color": "#1DA57A" },
    // })
   );
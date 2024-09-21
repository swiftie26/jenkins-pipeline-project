import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest"; // Import Jest plugin

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest, // Add Jest globals
      },
    },
    plugins: {
      jest: pluginJest, // Define Jest plugin as an object
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginJest.configs.recommended.rules, // Apply Jest recommended rules
    }
  }
];

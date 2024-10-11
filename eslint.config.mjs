import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  prettier,
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];

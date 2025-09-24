import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // Enforce best practices and prevent bugs
      "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-empty-pattern": "warn",
      "no-useless-escape": "error",
      "no-fallthrough": "error",
      "no-undef": "error",
          "react/react-in-jsx-scope": "off", // ⬅ turn off the old rule

      // React-specific rules for better performance and consistency
      // "react/jsx-key": "error", // Enforce key prop on elements in iterators
      // "react/jsx-no-target-blank": "error", // Enforce rel="noreferrer" on target="_blank"
      // "react/no-unescaped-entities": "warn", // Warn on unescaped HTML entities
      // "react/prop-types": "off", // Often turned off for TypeScript users
      // "react/self-closing-comp": "error", // Enforce self-closing tags for elements without children

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error", // Enforce the rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in Hooks like useEffect
       "no-useless-return": "warn",
       // React-specific rules for better performance and consistency
      // "react/jsx-key": "error", // Enforce key prop on elements in iterators
      // "react/jsx-no-target-blank": "error", // Enforce rel="noreferrer" on target="_blank"
      // "react/no-unescaped-entities": "warn", // Warn on unescaped HTML entities
      // "react/prop-types": "off", // Often turned off for TypeScript users
      // "react/self-closing-comp": "error", // Enforce self-closing tags for elements without children

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error", // Enforce the rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in Hooks like useEffect
    },
  },
];
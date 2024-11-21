import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
    {
        files: ['src/**/*.{ts,tsx}'], // Specify the files to lint
        ignores: ["dist/**/*","gui/**/*","build/**/*",],// Ensure no files are ignored

        plugins: {
            "@typescript-eslint": typescriptEslint,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: "module",

            parserOptions: {
                project: "./tsconfig.json",
            },
        },
     
        rules: {
            'no-console': 'warn', // Warn on console.log statements
            'semi': ['error', 'always'], // Enforce semicolons
            'quotes': ['error', 'single'], // Enforce single quotes
         
        },
    },
];
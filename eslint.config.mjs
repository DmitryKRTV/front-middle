import { fixupPluginRules } from "@eslint/compat";
import pluginJs from "@eslint/js";
import i18next from "eslint-plugin-i18next";
import krtv from "eslint-plugin-krtv-plugin";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";


const customGlobals = {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
};

export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: { 
        globals: {
            ...customGlobals,
            ...globals.browser,
            ...globals.jquery,
            ...globals.node,
        }, }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    i18next.configs['flat/recommended'],
    {
        plugins: {
            "unused-imports": unusedImports,
            "react-hooks": fixupPluginRules(reactHooks),
            "krtv-plugin": fixupPluginRules(krtv)
        },
        rules: {
            "semi": [2, "always"],
            'react/jsx-indent': [2, 4],                     // отступы для jsx
            'react/jsx-indent-props': [2, 4],               // отступы в пропсах
            indent: [2, 4],                                 // отступы для обычного кода
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],   // где можно писать jsx
            'react/react-in-jsx-scope': 'off',              // React в импортах
            'import/no-unresolved': 'off',                  // ESLint  обнаружил импорты или require-запросы, указывающие на файлы или модули, которых нет в вашем проекте или не могут быть разрешены.
            'import/prefer-default-export': 'off',          // выключить предпочтение дефолтному экспорту
            'no-underscore-dangle': 'off',                  // ошибка на нижнее почеркивание
            'no-unused-vars': 'warn',                       // выключить ошибку при неиспользовании переменных
            "@typescript-eslint/no-unused-vars": "warn",    // выключить ошибку при неиспользовании переменных баг
            "unused-imports/no-unused-imports": "error",    // не используемые имроты
            'react/require-default-props': 'off',           // обязательное дефолтное значение
            'react/jsx-props-no-spreading': 'warn',         // в пропсы развачиваются пропсы
            'react/function-component-definition': 'off',   // нет funcion declaration
            'no-shadow': 'off',                             // ругается на ts
            'import/extensions': 'off',                     // расширения в импорте
            'import/no-extraneous-dependencies': 'off',     // отключается страшные импорты всей либы       
            'react/display-name': 'off',    
            'max-len': [                                    // длинна в файлах
                'error',
                {
                    code: 120,
                    ignoreComments: true,
                },
            ],
            'i18next/no-literal-string': ['warn', {
                markupOnly: true,
                ignoreAttribute: [
                    'as', 'role', 'data-testid', 'to', 'target', 'justify', 'align', 'direction', 'gap',
                ],
            }],
            ...reactHooks.configs.recommended.rules,
            "@typescript-eslint/no-explicit-any": 'warn',
            // "react-hooks/rules-of-hooks": "error",
            // "react-hooks/exhaustive-deps": "warn",
            "krtv-plugin/path-checker":  ["error", { alias: "@" }],
            "krtv-plugin/public-api-imports":  ["error", { alias: "@", testFilesPatterns: 
                ['**/*.test.ts', '**\\*.test.ts', '**/StoreDecorator.tsx', '**\\StoreDecorator.tsx'] }],
            "krtv-plugin/layer-imports": [
                'error',
                {
                    alias: '@',
                    ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
                },
            ],
        },
    },
    {
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    },
    {
        ignores: ["cypress/*"]
    }
];
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";

const customGlobals = {
    __IS_DEV__: true,
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
    {
        plugins: {
            "unused-imports": unusedImports,
        },
        rules: {
            "semi": [2, "always"],
            'react/jsx-indent': [2, 4],                     // отступы для jsx
            'react/jsx-indent-props': [2, 4],               // отступы в пропсах
            indent: [2, 4],                                 // отступы для обычного кода
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],   // где можно писать jsx
            'react/react-in-jsx-scope': 'off',              // React в импортах
            'import/no-unresolved': 'off',    
            'import/prefer-default-export': 'off',          // выключить предпочтение дефолтному экспорту
            'no-underscore-dangle': 'off',                  // ошибка на нижнее почеркивание
            'no-unused-vars': 'warn',                       // выключить ошибку при неиспользовании переменных
            "unused-imports/no-unused-imports": "error",    // вы
            "@typescript-eslint/no-unused-vars": "warn",
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
        },
    }
];
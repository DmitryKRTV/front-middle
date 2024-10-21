import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

// Это (isTsx) сделано для того, чтобы выпилить tsloader
// Добавление isTsx разделяет работу babel с обычными файлами и с tsx файлами
interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export const createBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => ({
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            cacheDirectory: true,
            presets: ["@babel/preset-env"],
            plugins: [
                [
                    'i18next-extract',
                    {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true,
                    },
                ],
                [
                    "@babel/plugin-transform-typescript",       // Добавляет поддержку TS через babel
                    {
                        isTsx,
                    },
                ],
                "@babel/plugin-transform-runtime",          // Уменьшет размер бандла, за счет уменьшения кода 
                isTsx &&                                    // котоырй babel добавляет в каждый файл при обработке
                    !isDev && [
                    babelRemovePropsPlugin,                 // Для TSX файлов запускает рукописный плагин, 
                    {                                       // который чистит продакшен соборку от заданных в массиве атрибутов
                        props: ["data-testid"],
                    },
                ],
                isDev && require.resolve("react-refresh/babel"), // Для корректной работы hot reload
            ].filter(Boolean),
        },
    },
});

// const babelLoader = {
//     test: /\.(js|jsx|tsx)$/,
//     exclude: /node_modules/,
//     use: {
//         loader: "babel-loader",
//         options: {
//             presets: ['@babel/preset-env'],
//             "plugins": [
//                 "@babel/plugin-transform-runtime",
//                 [
//                     "@babel/plugin-transform-typescript"
//                 ],
//                 // [
//                 //     "i18next-extract",
//                 //     {
//                 //         locales: ['ru', 'en'],
//                 //         keyAsDefaultValue: true
//                 //     }
//                 // ],
//             ]
//         }
//     }
// };
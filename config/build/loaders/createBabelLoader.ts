import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

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
                    "@babel/plugin-transform-typescript",
                    {
                        isTsx,
                    },
                ],
                "@babel/plugin-transform-runtime",
                isTsx &&
                    !isDev && [
                    babelRemovePropsPlugin,
                    {
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
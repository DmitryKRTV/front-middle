import ReactRefreshTypeScript from 'react-refresh-typescript';
import webpack from "webpack";
import { createBabelLoader } from './loaders/createBabelLoader';
import { createdCssLoader } from './loaders/createCssLoader';
import { createFileLoader } from './loaders/createFileLoader';
import { createSVGLoader } from './loaders/createSVGLoader';
import { BuildOptions } from "./types/config";

// loader - сущности обрабатывающие файлы, которые не являются js файлами
// порядок loader'ов важен!
export function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {
    const {isDev} = options;

    const fileLoader = createFileLoader();
    const svgLoader = createSVGLoader();

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

    const codeBabelLoader = createBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = createBabelLoader({ ...options, isTsx: true });

    //есили не использовать этот loader, то для транспиляции JS es 6+ в старые версии нужно использовать babel
    const typescriptLoader = {
        test: /\.tsx?$/,                            // поиск файлов                          
        use: [                                      // загрузчик для найденных файлов
            // ... other loaders                    
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: options.isDev ? [ReactRefreshTypeScript()] : [],
                    }),
                    // `ts-loader` does not work with HMR unless `transpileOnly` is used.
                    // If you need type checking, `ForkTsCheckerWebpackPlugin` is an alternative.
                    transpileOnly: options.isDev,
                },
            },
        ],
        exclude: /node_modules/,                    // не искать тут
    };

    const cssLoader = createdCssLoader(options.isDev);

    return [
        fileLoader,
        svgLoader,
        // typescriptLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader
    ];
}
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOption} from "./types/config";
import ReactRefreshTypeScript from 'react-refresh-typescript';

// loader - сущности обрабатывающие файлы, которые не являются js файлами
// порядок loader'ов важен!
export function buildLoaders(options: BuildOption):webpack.RuleSetRule[] {
    const {isDev} = options

    const fileLoader = {
        test: /\.(png|jpe?g|gif|txt)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };


    //есили не использовать этот loader, то для транспиляции JS es 6+ в старые версии нужно использовать babel
    const  typescriptLoader = {
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
        }

    const cssLoader =  {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,  // Creates `style` nodes from JS strings
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                        },
                    }
                },                                            // Translates CSS into CommonJS
                "sass-loader",                                                 // Compiles Sass to CSS
            ],
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader
    ]
}
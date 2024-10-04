import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOption} from "./types/config";

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

    //есили не использовать этот loader, то для транспиляции JS es 6+ в старые версии нужно использовать babel
    const  typescriptLoader = {
            test: /\.tsx?$/,                            // поиск файлов
            use: 'ts-loader',                           // загрузчик для найденных файлов
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
        typescriptLoader,
        cssLoader
        ]
}
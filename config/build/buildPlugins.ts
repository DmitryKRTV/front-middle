import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOption} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(options: BuildOption): webpack.WebpackPluginInstance[] {
    const {paths} = options

    return [
        new HtmlWebpackPlugin({                     // для создания index.html в билде
            template: paths.html // вебпак возмёт файл как шаблон
        }),
        new webpack.ProgressPlugin(),                         // для отслеживания разрастания билда
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',       // путь куда ложить
            chunkFilename: 'css/[name].[contenthash:8].css'   // для работы асинхронного кода
        }),                            // для отделения css от js
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDev),
        })
    ]
}
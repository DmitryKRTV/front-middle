import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOption} from "./types/config";

export function buildPlugins(options: BuildOption): webpack.WebpackPluginInstance[] {
    const {paths} = options

    return [
        new HtmlWebpackPlugin({                     // для создания index.html в билде
            template: paths.html // вебпак возмёт файл как шаблон
        }),
        new webpack.ProgressPlugin()                         // для отслеживания разрастания билда
    ]
}
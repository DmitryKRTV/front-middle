import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from "./types/config";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const {paths} = options;
    const plugins = [
        new HtmlWebpackPlugin({                     // для создания index.html в билде
            template: paths.html // вебпак возмёт файл как шаблон
        }),
        new webpack.ProgressPlugin(),                         // для отслеживания разрастания билда
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',       // путь куда ложить
            chunkFilename: 'css/[name].[contenthash:8].css'   // для работы асинхронного кода
        }),                            // для отделения css от js
        new webpack.DefinePlugin({  
            __IS_DEV__: JSON.stringify(options.isDev),            // Определяет глобальные переменные для проекта
            __API__: JSON.stringify(options.apiUrl),
            __PROJECT__: JSON.stringify(options.project),
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales },
            ],
        }),
        new CircularDependencyPlugin({                     // следит за циклическими зависимостями
            exclude: /node_modules/,
            failOnError: true,
        }),
    ];

    if (options.isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            generateStatsFile: true,
            statsOptions: { source: false }
        }));
    }

    return plugins;
}
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;

    return {                      // webpack.Configuration позволяет получить подсказки
        mode,                                    // отвечает за размер собранного файла
        entry: paths.entry,      // где лежит главный js файл
        output: { //отвечает за настройки сборки
            filename: "[name].[contenthash:6].js",                //[name].[contenthash].js - имя собранного файла формируется. [name] - шаблон для динамического создания имени для кеширования браузером. [contenthash] - добавляется для того, чтобы браузер отдал новый билд, а не старый закешированный
            path: paths.build,             // где лежит собранный файл
            clean: true, //чистка папки билда
            publicPath: "/",
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined, // для отслеживания ошибок
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
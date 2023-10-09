import {BuildOption} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOption): webpack.Configuration {
    const {mode, paths} = options

    return {                      // webpack.Configuration позволяет получить подсказки
        mode,                                    // отвечает за размер собранного файла
        entry: paths.entry,      // где лежит главный js файл
        output: { //отвечает за настройки сборки
            filename: "[name].[contenthash].js",                //[name].[contenthash].js - имя собранного файла формируется. [name] - шаблон для динамического создания имени для кеширования браузером. [contenthash] - добавляется для того, чтобы браузер отдал новый билд, а не старый закешированный
            path: paths.build,             // где лежит собранный файл
            clean: true //чистка папки билда
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
    }
}
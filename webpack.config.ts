// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from "html-webpack-plugin";


// __dirname, 'src', 'index.ts' - эквивалент "./src/index.ts"
//плагины - классы

// module.exports = {
const config: webpack.Configuration = {                      // webpack.Configuration позволяет получить подсказки
    mode: "development",                                    // отвечает за размер собранного файла
    entry: path.resolve(__dirname, 'src', 'index.ts'),      // где лежит главный js файл
    output: { //отвечает за настройки сборки
        filename: "[name].[contenthash].js",                //[name].[contenthash].js - имя собранного файла формируется. [name] - шаблон для динамического создания имени для кеширования браузером. [contenthash] - добавляется для того, чтобы браузер отдал новый билд, а не старый закешированный
        path: path.resolve(__dirname, 'build'),             // где лежит собранный файл
        clean: true //чистка папки билда
    },
    plugins: [
        new HtmlWebpackPlugin({                     // для создания index.html в билде
            template: path.resolve(__dirname, 'public', 'index.html') // вебпак возмёт файл как шаблон
        }),
        new webpack.ProgressPlugin()                         // для отслеживания разрастания билда
    ],
    module: {
        rules: [                                             // обработка loader - файлов, которые не являются js файлами
            {
                test: /\.tsx?$/,                            // поиск файлов
                use: 'ts-loader',                           // загрузчик для найденных файлов
                exclude: /node_modules/,                    // не искать тут
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],                 //скроет расширения из импорта
    },
}

export default config
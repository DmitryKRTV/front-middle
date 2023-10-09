import webpack from "webpack";

// loader - сущности обрабатывающие файлы, которые не являются js файлами
export function buildLoaders():webpack.RuleSetRule[] {
    const  typescriptLoader = {
            test: /\.tsx?$/,                            // поиск файлов
            use: 'ts-loader',                           // загрузчик для найденных файлов
            exclude: /node_modules/,                    // не искать тут
        }

    return [
        typescriptLoader,
        ]
}
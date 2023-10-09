import webpack from "webpack";

// loader - сущности обрабатывающие файлы, которые не являются js файлами
// порядок loader'ов важен!
export function buildLoaders():webpack.RuleSetRule[] {

    //есили не использовать этот loader, то для транспиляции JS es 6+ в старые версии нужно использовать babel
    const  typescriptLoader = {
            test: /\.tsx?$/,                            // поиск файлов
            use: 'ts-loader',                           // загрузчик для найденных файлов
            exclude: /node_modules/,                    // не искать тут
        }

        const cssLoader =  {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }

    return [
        typescriptLoader,
        cssLoader
        ]
}
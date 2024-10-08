import webpack from "webpack";
import { BuildOption } from "./types/config";


export function buildResolvers(options: BuildOption): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],   //скроет расширения из импорта
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {
            "@": options.paths.src
        },
        mainFiles: ['index'],  
    };
}

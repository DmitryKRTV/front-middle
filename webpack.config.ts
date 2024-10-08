import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";

// __dirname, 'src', 'index.tsx' - эквивалент "./src/index.tsx"
//плагины - классы
// сборка это функция и соответственно в параметры сборки приходят переменные окружения,
// задаваемые через командную строку при запуске команды
export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };

    const mode = env.mode || "development";
    const PORT = env.port || 3000;

    const isDev = mode === "development";

    // module.exports = {
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });
    return config;
};
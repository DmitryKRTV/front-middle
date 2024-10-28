import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

// __dirname, 'src', 'index.tsx' - эквивалент "./src/index.tsx"
//плагины - классы
// сборка это функция и соответственно в параметры сборки приходят переменные окружения,
// задаваемые через командную строку при запуске команды

// function getApiUrl(mode: BuildMode, apiUrl?: string) {
//     if (apiUrl) {
//         return apiUrl;
//     }
//     if (mode === 'production') {
//         return '/api';
//     }

//     return 'http://localhost:8000';
// }

export default (env: BuildEnv) => {
    const mode = env?.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env?.port || 10000;
    const apiUrl = env?.apiUrl || 'https://localhost:8443';
    // const apiUrl = getApiUrl(mode, env?.apiUrl);

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
    };

    // module.exports = {
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });
    return config;
};

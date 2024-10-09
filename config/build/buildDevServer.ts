import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOption } from "./types/config";

//сервер для автоматической пересборки
export function buildDevServer(options: BuildOption): DevServerConfiguration {
    return {
        port: options.port,     // на каком порту откроется
        open: true,              // открывать страницу с приложением
        historyApiFallback: true, // убирает ошибку cannot get
        hot: true,
        client: {
            overlay: false,
        }
    };
}
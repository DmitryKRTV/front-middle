export type BuildMode = 'production' | 'development'

// интерфейс для типизации путей различных файлов для установки до сборки
export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOption {
    mode: BuildMode,
    paths: BuildPaths
    isDev: boolean
    port: number
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}

// Файл с типами для построения опций для билда
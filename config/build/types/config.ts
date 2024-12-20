export type BuildMode = 'production' | 'development'

// интерфейс для типизации путей различных файлов для установки до сборки
export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths
    isDev: boolean
    port: number
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
    apiUrl: string;
}


// Файл с типами для построения опций для билда
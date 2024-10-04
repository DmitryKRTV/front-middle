export enum Routes {
    DEFAULT = '',
    MAIN = 'main',
    ABOUT = 'about',
}

export const enum AppRoutes {
    DEFAULT = Routes.DEFAULT,
    MAIN = Routes.MAIN,
    ABOUT = Routes.ABOUT,
}

export const getRouteDefault = () => '/';
export const getRouteMain = () => '/main';
export const getRouteAbout = () => '/about';
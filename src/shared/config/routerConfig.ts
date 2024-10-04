export enum Routes {
    MAIN = '',
    ABOUT = 'about',
}

export const getRoute = (route: Routes) => '/' + route
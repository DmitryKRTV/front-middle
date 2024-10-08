export enum Routes {
    MAIN = '',
    ABOUT = 'about',
    NOTFOUND = '*'
}

export const getRoute = (route: Routes) => '/' + route;
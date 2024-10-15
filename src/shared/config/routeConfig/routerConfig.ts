export enum Routes {
    MAIN = '',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOTFOUND = '*'
}

export const getRoute = (route: Routes) => '/' + route;
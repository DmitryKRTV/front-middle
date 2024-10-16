import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { getRoute, Routes } from '@/shared/config/routeConfig/routerConfig';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    // roles?: UserRole[];
};

export const RouteConfig: Record<Routes, AppRoutesProps> = {
    [Routes.MAIN]: {
        path: getRoute(Routes.MAIN),
        element: <MainPage />,
    },
    [Routes.ABOUT]: {
        path: getRoute(Routes.ABOUT),
        element: <AboutPage />,
    },
    [Routes.PROFILE]: {
        path: getRoute(Routes.PROFILE),
        element: <ProfilePage />,
        authOnly: true,
    },
    [Routes.NOTFOUND]: {
        path: getRoute(Routes.NOTFOUND),
        element: <NotFoundPage />,
    },
};

// export enum AppRoutes {
//     MAIN = 'main',
//     ABOUT = 'about',
//     PROFILE = 'profile',
//     // last
//     NOT_FOUND = 'not_found',
// }

// export const RoutePath: Record<AppRoutes, string> = {
//     [AppRoutes.MAIN]: '/',
//     [AppRoutes.ABOUT]: '/about',
//     [AppRoutes.PROFILE]: '/profile',
//     // последний
//     [AppRoutes.NOT_FOUND]: '*',
// };

// export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
//     [AppRoutes.MAIN]: {
//         path: RoutePath.main,
//         element: <MainPage />,
//     },
//     [AppRoutes.ABOUT]: {
//         path: RoutePath.about,
//         element: <AboutPage />,
//     },
//     [AppRoutes.PROFILE]: {
//         path: RoutePath.profile,
//         element: <ProfilePage />,
//         authOnly: true,
//     },
//     // last
//     [AppRoutes.NOT_FOUND]: {
//         path: RoutePath.not_found,
//         element: <NotFoundPage />,
//     },
// };

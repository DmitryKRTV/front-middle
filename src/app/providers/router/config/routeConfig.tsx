import { AboutPage } from '@/pages/AboutPage';
import ArticleDetailsPage from '@/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage';
import ArticlesPage from '@/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AppRoutes, RoutePath } from '@/shared/config/routeConfig/routerConfig';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    // roles?: UserRole[];
};

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
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

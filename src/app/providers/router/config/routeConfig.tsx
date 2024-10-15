import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { getRoute, Routes } from '@/shared/config/routeConfig/routerConfig';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    // authOnly?: boolean;
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
    },
    [Routes.NOTFOUND]: {
        path: getRoute(Routes.NOTFOUND),
        element: <NotFoundPage />,
    },
};

// Тоже самое что и это, но тут не очевидна последовательность обёртов в index.ts, поэтому выбран подход выше
// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
// <div>
//     <Link to="about">About Page</Link>
//     <Link to="main">Main Page</Link>
// </div>
//         ),
//     },
//     {
//         path: "about",
//         element: <AboutPageAsync><Link to="/">App</Link></AboutPageAsync>,
//     },
//     {
//         path: "main",
//         element: <MainPageAsync><Link to="/">App</Link></MainPageAsync>,
//     },
// ]);
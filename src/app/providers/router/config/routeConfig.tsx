import { RouteProps } from 'react-router-dom';
import {
    AppRoutes,
    getRouteAbout,
    getRouteDefault,
    getRouteMain,
} from './const';
import { Link } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';

export type AppRoutesProps = RouteProps & {
    // authOnly?: boolean;
    // roles?: UserRole[];
};

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.DEFAULT]: {
        path: getRouteDefault(),
        element: <div>
        <Link to={getRouteAbout()}>About Page</Link>
        <Link to={getRouteMain()}>Main Page</Link>
    </div>,
    },
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
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
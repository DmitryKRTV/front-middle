import { getUserAuthData } from "@/entities/User";
import { PageLoader } from "@/shared/ui/PageLoader";
import { memo, Suspense, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AppRoutesProps, RouteConfig } from "../config/routeConfig";

export const AppRouter = memo(() => {
    
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(RouteConfig)
        .filter((route) => (route.authOnly && !isAuth) ? false : true), [isAuth]);

    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const el = (
            <Suspense
                fallback={
                    <PageLoader/>
                }
            >
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        );
        return <Route key={route.path} path={route.path} element={el} />;
    }, []);
    return <Routes>{routes.map(renderWithWrapper)}</Routes>;
});


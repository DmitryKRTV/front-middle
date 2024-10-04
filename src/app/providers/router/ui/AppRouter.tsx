import { memo, Suspense, useCallback } from "react";
import { AppRoutesProps, RouteConfig } from "../config/routeConfig";
import { Route, Routes } from "react-router-dom";

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const el = (
            <Suspense
                fallback={
                    <></>
                }
            >
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        );
        return <Route key={route.path} path={route.path} element={el} />;
    }, []);
    return <Routes>{Object.values(RouteConfig).map(renderWithWrapper)}</Routes>;
});


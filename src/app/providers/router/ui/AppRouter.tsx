import { PageLoader } from "@/shared/ui/PageLoader";
import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutesProps, RouteConfig } from "../config/routeConfig";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = memo(() => {
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
        return <Route
            key={route.path}
            path={route.path}
            element={route.authOnly ? <RequireAuth>{el}</RequireAuth> : el}
        />;
    }, []);
    return <Routes>{Object.values(RouteConfig).map(renderWithWrapper)}</Routes>;
});


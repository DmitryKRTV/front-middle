import { AppRoutesProps } from '@/shared/types/router';
import { PageLoader } from '@/shared/ui/deprecated/PageLoader';
import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const el = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{el}</RequireAuth>
                    ) : (
                        el
                    )
                }
            />
        );
    }, []);
    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});

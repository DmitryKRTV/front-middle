import { getUserAuthData } from '@/entities/User';
import { getRoute, Routes } from '@/shared/config/routeConfig/routerConfig';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={getRoute(Routes.MAIN)} state={{ from: location }} replace />;
    }

    return children;
}

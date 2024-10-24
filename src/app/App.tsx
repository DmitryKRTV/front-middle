import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { PageLoader } from '@/shared/ui/PageLoader';
import { Version } from '@/shared/ui/Version';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from './providers/router/ui/AppRouter';
import { useTheme } from './providers/theme';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames(`app`, {}, [theme])}>
            <Suspense fallback={<PageLoader/>}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
                <Version/>
            </Suspense>
        </div>
    );
};
import { userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { PageLoader } from '@/shared/ui/PageLoader';
import { Version } from '@/shared/ui/Version';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppRouter } from './providers/router/ui/AppRouter';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames(`app`, {},[])}>
            <Suspense fallback={<PageLoader/>}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
                <Version/>
            </Suspense>
        </div>
    );
};
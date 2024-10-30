import { getUserInited, initAuthData } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { PageLoader } from '@/shared/ui/deprecated/PageLoader';
import { Version } from '@/shared/ui/redesigned/Version';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router/ui/AppRouter';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

    return (
        <>
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <div className={classNames('app', {}, [theme])}>
                        <Suspense fallback="">
                            <Navbar />
                            <div className="content-page">
                                <Sidebar />
                                <AppRouter />
                            </div>
                        </Suspense>
                    </div>
                }
                on={
                    <div className={classNames('app_redesigned', {}, [theme])}>
                        <Suspense fallback="">
                            <MainLayout
                                header={<Navbar />}
                                content={<AppRouter />}
                                sidebar={<Sidebar />}
                            />
                        </Suspense>
                    </div>
                }
            />
            <Version />
        </>
    );
}

export default App;

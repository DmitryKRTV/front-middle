import { classNames } from '@/shared/lib/classNames';
import { PageLoader } from '@/shared/ui/PageLoader';
import { Version } from '@/shared/ui/Version/Version';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router/ui/AppRouter';
import { useTheme } from './providers/theme';

export const App = () => {
    const {theme} = useTheme();

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
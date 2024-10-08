import './styles/index.scss';
import { AppRouter } from './providers/router/ui/AppRouter';
import { useTheme } from './providers/theme';
import { Navbar } from '@/widgets/Navbar';
import { classNames } from '@/shared/lib/classNames';
import { Version } from '@/shared/ui/Version/Version';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense } from 'react';

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames(`app ${theme}`, {},[theme])}>
            <Suspense fallback="">
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
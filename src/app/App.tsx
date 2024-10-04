import './styles/index.scss'
import { AppRouter } from './providers/router/ui/AppRouter';
import { useTheme } from './providers/theme';
import { Navbar } from '@/widgets/Navbar';
import { classNames } from '@/shared/lib/classNames';

export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames(`app ${theme}`, {},[theme])}>
            <Navbar/>
            <AppRouter />
        </div>
    );
};
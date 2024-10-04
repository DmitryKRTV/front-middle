import './styles/index.scss'
import { AppRouter } from './providers/router/ui/AppRouter';
import { useTheme } from './providers/theme';
import { cls } from '@/shared';

export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={cls(`app ${theme}`, {},[theme])}>
            <AppRouter />
        </div>
    );
};
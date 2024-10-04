import { useTheme } from '@/app/providers/theme';
import {ReactNode} from 'react';

interface MainPageProps {
    children?: ReactNode
}

export const MainPage = (props: MainPageProps) => {
    const {children} = props
    const {theme, toggleTheme} = useTheme()

    return (
        <div>
            <button onClick={toggleTheme}>THEME</button>
                MainPage
            {children}
        </div>
    );
};

export default MainPage


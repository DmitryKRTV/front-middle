import {ReactNode} from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
    children?: ReactNode
}

export const MainPage = (props: MainPageProps) => {
    const {t} = useTranslation('main');
    const {children} = props

    return (
        <div>
            {t('Главная страница')}
            {children}
        </div>
    );
};

export default MainPage


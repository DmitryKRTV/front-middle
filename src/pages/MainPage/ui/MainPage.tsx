import { Page } from '@/widgets/Page';
import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
    children?: ReactNode;
}

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid="MainPage">
            <div>123123123123123123</div>
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;

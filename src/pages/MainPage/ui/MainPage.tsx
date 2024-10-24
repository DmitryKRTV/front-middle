import { Counter } from "@/entities/Counter";
import { Page } from "@/widgets/Page";
import { ReactNode } from "react";
import { useTranslation } from 'react-i18next';

interface MainPageProps {
    children?: ReactNode
}

export const MainPage = (props: MainPageProps) => {
    const {t} = useTranslation();
    const {children} = props;

    return (
        <Page>
            <Counter></Counter>
            {t('Главная страница')}
            {children}
        </Page>
    );
};

export default MainPage;


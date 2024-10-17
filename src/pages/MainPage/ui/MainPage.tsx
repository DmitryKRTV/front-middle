import { BugButton } from "@/app/providers/ErrorBoundary";
import { Counter } from "@/entities/Counter";
import { Page } from "@/widgets/Page/Page";
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
            <BugButton/>
            <Counter></Counter>
            {t('Главная страница')}
            {children}
        </Page>
    );
};

export default MainPage;


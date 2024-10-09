import { BugButton } from "@/app/providers/ErrorBoundary";
import { ReactNode } from "react";
import { useTranslation } from 'react-i18next';

interface MainPageProps {
    children?: ReactNode
}

export const MainPage = (props: MainPageProps) => {
    const {t} = useTranslation();
    const {children} = props;

    return (
        <div>
            <BugButton/>
            {t('Главная страница')}
            {children}
        </div>
    );
};

export default MainPage;


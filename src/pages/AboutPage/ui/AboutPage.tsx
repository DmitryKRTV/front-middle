import {ReactNode} from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
    children?: ReactNode
}

export const AboutPage = (props: AboutPageProps) => {
    const {t} = useTranslation('about');
    const {children} = props

    return (
        <div>
            {t('О сайте')}
            {children}
        </div>
    );
};

export default AboutPage
import { classNames } from '@/shared/lib/classNames';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from '../../Button';
import cls from './LangSwitcher.module.scss';


interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, short = false } = props;
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};


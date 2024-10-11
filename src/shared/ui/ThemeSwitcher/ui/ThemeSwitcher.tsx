import { Theme, useTheme } from '@/app/providers/theme';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../../Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;
    const {theme, toggleTheme} = useTheme();

    return <Button className={classNames(cls.ThemeSwitcher, {}, [className])}
        onClick={toggleTheme}
        theme={ButtonTheme.CLEAR}
    >
        {theme === Theme.DARK ? <DarkIcon  /> : <LightIcon />}
    </Button>;
};
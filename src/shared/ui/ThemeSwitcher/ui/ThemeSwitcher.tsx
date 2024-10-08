import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/theme';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from '../../Button';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;
    const {theme, toggleTheme} = useTheme();

    return <Button className={classNames(cls.ThemeSwitcher, {}, [className])}
        onClick={toggleTheme}
        theme={ThemeButton.CLEAR}
    >
        {theme === Theme.DARK ? <DarkIcon  /> : <LightIcon />}
    </Button>;
};
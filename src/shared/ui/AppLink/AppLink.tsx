import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    to: string;
    className?: string;
    children?: ReactNode;
    theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
    const {
        className,
        to, 
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return <Link 
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </Link>;
};
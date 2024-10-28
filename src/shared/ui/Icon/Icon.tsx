import { classNames } from '@/shared/lib/classNames/classNames';
import React, { FC, memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGElement> {
    className?: string;
    Svg: FC<React.SVGProps<SVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props;

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
                className,
            ])}
            {...otherProps}
        />
    );
});

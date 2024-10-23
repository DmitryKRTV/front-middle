import { classNames } from '@/shared/lib/classNames/classNames';
import React, { FC, memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: FC<React.SVGProps<SVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted } = props;

    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
    );
});

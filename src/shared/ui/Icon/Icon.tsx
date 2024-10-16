import { classNames } from '@/shared/lib/classNames/classNames';
import React, { FC, memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: FC<React.SVGProps<SVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg } = props;

    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
});

import { getRoute, Routes } from '@/shared/config/routeConfig/routerConfig';
import { FC, SVGProps } from "react";
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: FC<SVGProps<SVGElement>>;
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: getRoute(Routes.MAIN),
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: getRoute(Routes.ABOUT),
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: getRoute(Routes.PROFILE),
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
];

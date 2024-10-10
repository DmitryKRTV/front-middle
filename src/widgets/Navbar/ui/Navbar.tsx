import { getRoute, Routes } from "@/shared/config/routeConfig/routerConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink className={cls.mainLink} to={getRoute(Routes.MAIN)}>Main Page</AppLink>
            <AppLink to={getRoute(Routes.ABOUT)} theme={AppLinkTheme.PRIMARY}>About Page</AppLink>
        </div>
    </div>;
};

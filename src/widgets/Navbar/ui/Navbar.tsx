import { getRoute, Routes } from "@/shared/config/routerConfig"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink"

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink className={cls.mainLink} to={getRoute(Routes.MAIN)}>Main Page</AppLink>
            <AppLink to={getRoute(Routes.ABOUT)} theme={AppLinkTheme.SECONDARY}>About Page</AppLink>
        </div>
    </div>
}

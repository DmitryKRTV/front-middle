import {ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_kEY, Theme, ThemeContext} from "../lib/themeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_kEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
    children: ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const {children} = props
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() =>
        ({theme: theme, setTheme}), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
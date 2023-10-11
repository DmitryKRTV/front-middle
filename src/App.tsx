import React, {useContext, useState} from 'react';
import {Counter} from "./components/Counter";
import './styles/index.scss'
import {LOCAL_STORAGE_THEME_kEY, Theme, ThemeContext} from "./theme/themeContext";
import {useTheme} from "./theme/useTheme";



export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>THEME</button>
            <Counter/>
        </div>
    );
};
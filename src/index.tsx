import {render} from "react-dom";
import React, {Suspense} from "react";
import {App} from "./App";
import {createBrowserRouter, Link, RouterProvider,} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import { createRoot } from 'react-dom/client';
import ThemeProvider from "./theme/themeProvider";
const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <App></App>
                <Link to="about">About Page</Link>
                <Link to="main">Main Page</Link>
            </div>
        ),
    },
    {
        path: "about",
        element: <AboutPageAsync> <Link to="/">App</Link></AboutPageAsync>,
    },
    {
        path: "main",
        element: <MainPageAsync> <Link to="/">App</Link></MainPageAsync>,
    },
]);

root.render(
    <ThemeProvider>
    <Suspense fallback={<div>...loading</div>}>
        <RouterProvider router={router}/>
    </Suspense>
    </ThemeProvider>)
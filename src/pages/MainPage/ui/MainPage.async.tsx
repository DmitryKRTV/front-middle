import React from "react";

export const MainPageAsync = React.lazy(() => new Promise(res =>
// @ts-ignore
    setTimeout(() =>res(import('./MainPage')), 3000)))

// import { lazy } from 'react';
// export const MainPageAsync = lazy(() => import('./MainPage'));

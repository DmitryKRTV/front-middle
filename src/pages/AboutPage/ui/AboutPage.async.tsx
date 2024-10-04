import React from "react";

export const AboutPageAsync = React.lazy(() => new Promise(res =>
// @ts-ignore
    setTimeout(() =>res(import('./AboutPage')), 1000)))
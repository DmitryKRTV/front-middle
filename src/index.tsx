import {render} from "react-dom";
import React, {Suspense} from "react";
import {App} from "./app/App";
import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import ThemeProvider from "./app/providers/theme/ui/themeProvider";
import "./shared/config/i18n/i18n";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback={<div>...loading</div>}>
                <App/>
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>
)
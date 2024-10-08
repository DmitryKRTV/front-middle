import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import ThemeProvider from "./app/providers/theme/ui/themeProvider";
import "./shared/config/i18n/i18n";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
);
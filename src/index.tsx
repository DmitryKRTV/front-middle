import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { StoreProvider } from './app/providers/StoreProvider';
import ThemeProvider from "./app/providers/theme/ui/themeProvider";
import './app/styles/index.scss';
import "./shared/config/i18n/i18n";

const container = document.getElementById('root');
if (!container) {
    throw new Error('Failed to find the root element');
}
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);
import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation/renderWithTranslation";
// import { screen } from "@testing-library/dom";
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from "./Sidebar";

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
    });
});
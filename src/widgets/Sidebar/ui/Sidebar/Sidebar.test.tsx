// import { screen } from "@testing-library/dom";
import { renderWithRouter } from "@/shared/lib/tests/renderWithRouter/renderWithRouter";
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from "./Sidebar";

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithRouter(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithRouter(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
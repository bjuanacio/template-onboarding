import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Header', () => {
    it('Should render with text', async () => {
        render(<Header title='Texto de prueba' userName='Usuario'></Header>);
        const input = screen.getByText('Texto de prueba');
        expect(input).toBeInTheDocument();
    });
});

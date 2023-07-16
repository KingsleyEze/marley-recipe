import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('renders Header with heading', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', {
      name: /Marley Recipes/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '.';

describe('JestComp', () => {
  it('should render', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /testes/i })
    ).toBeInTheDocument();
  });
});

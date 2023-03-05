import React from 'react';
import { render, screen } from '@testing-library/react';
import Tag from './Tag';

describe('JestComp', () => {
  it('should render', () => {
    const { container } = render(<Tag variation='red md'>teste</Tag>);

    expect(
      screen.getByText('teste')
    ).toBeInTheDocument();
  });
});

import React from 'react';

import { render, screen } from '@testing-library/react';
import Tag from './Tag';
test('testing tag', async () => {
  render(<Tag variation='purple'>Teste</Tag>);
  const Tag1 = screen.getByText('Teste');
  expect(Tag1).toBeInTheDocument();
});

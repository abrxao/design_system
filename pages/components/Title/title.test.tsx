import React from 'react';

import { render, screen } from '@testing-library/react';
import Title from './Title';
test('testing title', async () => {
  render(<Title variation='h1'>Teste h1</Title>);
  const title1 = screen.getByText('Teste h1');
  expect(title1).toHaveClass('neo-title');
  expect(title1.nodeName).toEqual('H1');

  render(<Title variation='h2'>Teste h2</Title>);
  const title2 = screen.getByText('Teste h2');
  expect(title2).toHaveClass('neo-title');
  expect(title2.nodeName).toEqual('H2');
});

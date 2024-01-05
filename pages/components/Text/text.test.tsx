import React from 'react';

import { render, screen } from '@testing-library/react';
import Text from './Text';
test('testing text', async () => {
  render(<Text variation='h1'>Teste</Text>);
  const Text1 = screen.getByText('Teste');
  expect(Text1).toBeInTheDocument();
});

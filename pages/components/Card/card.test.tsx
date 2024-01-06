import React from 'react';

import { render, screen } from '@testing-library/react';
import Card from './Card';
test('testing Card', async () => {
  render(
    <div>
      <Card variation='inset'>Teste</Card>
    </div>
  );
  const Text1 = screen.getByText('Teste');
  expect(Text1).toBeInTheDocument();
});

import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import ToggleButton from './ToggleButton';
import { act } from 'react-dom/test-utils';
test('testing title', async () => {
  render(<ToggleButton variation='md' />);
  const toggleButton = screen.getByRole('checkbox');
  await act(async () => {
    fireEvent.click(toggleButton);
  });
  expect(toggleButton).toHaveProperty('checked', true);
});

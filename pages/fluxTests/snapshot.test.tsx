import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import Home from '..';

test('snapshot', async () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

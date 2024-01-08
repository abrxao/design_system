import React from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';
import RadioGroup from './RadioGroup';
test('testing RadioGroup', async () => {
  const options = ['option0', 'option1', 'option2'];
  render(
    <RadioGroup
      options={options}
      label='title'
    />
  );
  const radioGroupElements = screen.getAllByRole('radio');

  await act(async () => {
    fireEvent.click(radioGroupElements[1]);
  });
  expect(radioGroupElements[1]).toBeChecked();
});

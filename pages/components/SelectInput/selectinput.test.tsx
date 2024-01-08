import React from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';
import SelectInput from './SelectInput';
test('testing SelectInput', async () => {
  const options = ['option0', 'option1', 'option2'];
  const title = 'select one';
  render(
    <SelectInput
      options={options}
      title={title}
    />
  );
  const selectElem = screen.getByLabelText(title) as HTMLSelectElement;

  await act(async () => {
    fireEvent.change(selectElem, { target: { value: options[1] } });
  });
  expect(selectElem.value).toEqual(options[1]);
});

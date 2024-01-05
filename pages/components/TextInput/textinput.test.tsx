import React from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';
import TextInput from './TextInput';
test('testing text input', async () => {
  render(
    <TextInput
      name='test-input'
      label='test'
    />
  );
  const text = 'testing';
  const input = screen.getByRole('textbox');
  await act(async () => {
    fireEvent.change(input, { target: { value: text } });
  });
  const inputValue = await screen.findByDisplayValue(text);
  expect(inputValue).toBeInTheDocument();
});

test('testing text input as empty', async () => {
  const errorMsg = 'error testing';
  render(
    <TextInput
      name='test-input'
      label='test'
      required={true}
      errormsg={errorMsg}
    />
  );
  const text = '';
  const input = screen.getByRole('textbox');
  await act(async () => {
    fireEvent.change(input, { target: { value: text } });
  });
  const inputValue = await screen.findByDisplayValue(text);
  expect(inputValue).toBeInTheDocument();
});

import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';

import Home from '..';

// test('index', async () => {
//   render(<Home />);

//   const button = screen.getByText('send');//GetByText procura qualquer componente a partir de um texto e crasha os tests caso não exista. Bom para testes onde o componente precisa existir
//   expect(button).toBeInTheDocument();

//   const buttonQuery = screen.queryByText('sended'); //queryByText procura um componente a partir de um texto e retorna null caso o mesmo não exista. Bom para testes onde o componente pode não ou ser redenrizado em tela.
//   expect(buttonQuery).toBeInTheDocument();

//   const input = screen.getByRole('textbox'); //queryByText procura

//   const buttonFind = await screen.findByText('send'); //findBytext procura o componente depois de um segundo da pagina ser iniciada. Bom para ser usado quando alguma ação assincrona faz o mesmo ser redenrizado em tela.

//   const VALUE = 'valor verdadeiro';
//   await act(async () => {
//     fireEvent.change(input, { target: { value: VALUE } });
//     fireEvent.click(button);
//   });

//   const showingText = screen.queryByText(VALUE);
//   expect(showingText).toBeInTheDocument();

// });

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          logradouro: 'Praça da Sé',
          bairro: 'Sé',
          localidade: 'São Paulo',
        }),
    } as Response);
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

test('simulation input', async () => {
  render(<Home />);
  const showingText = 'hello world';
  const input = screen.getByTestId('input-test');
  const button = screen.getByTestId('input-send');
  act(() => {
    fireEvent.change(input, { target: { value: showingText } });
    fireEvent.click(button);
  });

  const anwser = await screen.findByText(showingText);
  expect(anwser).toBeInTheDocument();
});

test('testing CEP query', async () => {
  render(<Home />);
  const showingText = '01001000';
  const input = screen.getByTestId('cep-input-send');
  const button = screen.getByTestId('cep-button');
  await act(async () => {
    fireEvent.change(input, { target: { value: showingText } });
    fireEvent.click(button);
  });

  const logradouro = await screen.findByText('Logradouro: Praça da Sé');
  expect(logradouro).toBeInTheDocument();
  const localidade = await screen.findByText('Localidade: São Paulo');
  expect(localidade).toBeInTheDocument();
  const bairro = await screen.findByText('Bairro: Sé');
  expect(bairro).toBeInTheDocument();
});

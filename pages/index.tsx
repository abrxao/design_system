import Head from 'next/head';
import React, {
  ChangeEvent,
  FunctionComponent,
  SyntheticEvent,
  useState,
} from 'react';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import TextInput from './components/TextInput/TextInput';
import Tag from './components/Tag/Tag';
import Title from './components/Title/Title';
import Text from './components/Text/Text';

interface CEPData {
  logradouro: string;
  localidade: string;
  bairro: string;
}

export const Home: FunctionComponent = () => {
  const [item, setItem] = useState('');
  const [value, setValue] = useState<string>('');
  const [addressData, setAddressData] = useState<CEPData | null>(null);
  const [cep, setCep] = useState('');

  const fetchData = async () => {
    if (cep == '') {
      alert('Digite um CEP');
    } else {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setAddressData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValue(e.target.value);
  };

  const handleClick: Function = (e: SyntheticEvent) => {
    e.preventDefault();
    setItem(value);
    setValue('');
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <main>
        <Container
          variation='md'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            maxWidth: 520,
          }}>
          <form style={{ margin: 'auto' }}>
            <TextInput
              value={value}
              data-testid='input-test'
              label='name'
              onChange={(e) => handleChange(e)}
            />
            <Button
              variation='primary'
              width='w-100'
              data-testid='input-send'
              onClick={(e) => handleClick(e)}>
              Input Sended
            </Button>
          </form>
          <div
            style={{
              border: '1px solid #fff8',
              width: '100%',
              padding: 8,
              borderRadius: 8,
              position: 'relative',
            }}>
            <Tag variation='purple md'>{item}</Tag>
          </div>
        </Container>
        <Container
          variation='md'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            maxWidth: 520,
          }}>
          <form
            action=''
            onSubmit={(e) => {
              e.preventDefault();
              fetchData();
            }}>
            <TextInput
              label='CEP'
              type='text'
              value={cep}
              data-testid='cep-input-send'
              onChange={(e) => setCep(e.target.value)}
            />
            <div>{cep}</div>
            <Button
              variation='outlined'
              data-testid='cep-button'>
              Buscar Endereço
            </Button>
          </form>

          {addressData && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Title variation='h2'>Informações de Endereço</Title>
              <Text>Logradouro: {addressData.logradouro}</Text>
              <Text>Localidade: {addressData.localidade}</Text>
              <Text>Bairro: {addressData.bairro}</Text>
            </div>
          )}
        </Container>
      </main>
    </>
  );
};

export default Home;

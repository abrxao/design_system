import React from 'react';
import Container from './Container';
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import Card from '../Card/Card';
import CardImgBox from '../CardImgBox/CardImgBox';
import Tag from '../Tag/Tag';
import Image from 'next/image';
import CardDescriptionBox from '../CardDescriptionBox/CardDescriptionBox';
import Title from '../Title/Title';
import Text from '../Text/Text';
import wallpaper from '../../../public/wallpaper.webp';
import rx7 from '../../../public/rx7.webp';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    fullscreen: true,
  },
} as ComponentMeta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} >
    <>
      <Card>
        <CardImgBox>
          <Tag
            variation='red md'
            sx={{ top: '-.25em' }}>
            350z
          </Tag>
          <Image
            fill
            src={wallpaper}
            alt=''
          />
        </CardImgBox>
        <CardDescriptionBox>
          <Title variation='h2'>Nissan</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            alias aut magni officiis necessitatibus ipsum sit repellendus,
            perspiciatis illum asperiores harum? Est saepe aut, asperiores iste
            sunt consequuntur possimus explicabo?sadfasdasdasdasdasdasdasdas
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis
            ducimus fugit quas tempore maxime molestiae delectus distinctio
            totam illum eaque ipsam, culpa recusandae quam necessitatibus odio.
            Atque, obcaecati nesciunt.
          </Text>
        </CardDescriptionBox>
      </Card>
      <Card>
        <CardImgBox>
          <Tag
            variation='purple inset'
            sx={{ bottom: '-3.2em', right: '-.25em' }}>
            RX-7 Savanna
          </Tag>
          <Image
            fill
            src={rx7}
            alt=''
          />
        </CardImgBox>
        <CardDescriptionBox>
          <Title variation='h2'>Mazda</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            alias aut magni officiis necessitatibus ipsum sit repellendus,
            perspiciatis illum asperiores harum? Est saepe aut, asperiores iste
          </Text>
        </CardDescriptionBox>
      </Card>
    </>
  </Container>
);

export const Main = Template.bind({});

Main.args = {
  sx:{gap:'2em'}
};

Main.decorators = [
  (Story) => (
    <div style={{ width:'100%',border: '1px solid #fff2',backgroundColor:'var(--bg-color)' }}>
      <Story />
    </div>
  ),
];

export const MainXsm = Template.bind({});

MainXsm.args = {
  variation:'xsm',
  sx:{gap: '.8em'}
};

MainXsm.decorators = [
  (Story) => (
    <div
      style={{
        width: '100%',
        border: '1px solid #fff2',
        backgroundColor: 'var(--bg-color)',
        display:'flex',
        justifyContent:'center'
      }}>
      <Story />
    </div>
  ),
];

export const MainSm = Template.bind({});

MainSm.args = {
  variation: 'sm',
  sx:{gap: '1em'}
};

MainSm.decorators = [
  (Story) => (
    <div
      style={{
        width: '100%',
        border: '1px solid #fff2',
        backgroundColor: 'var(--bg-color)',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Story />
    </div>
  ),
];

export const MainMd = Template.bind({});

MainMd.args = {
  variation: 'md',
  sx:{gap: '1em'}
};

MainMd.decorators = [
  (Story) => (
    <div
      style={{
        width: '100%',
        border: '1px solid #fff2',
        backgroundColor: 'var(--bg-color)',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Story />
    </div>
  ),
];

export const MainLg = Template.bind({});

MainLg.args = {
  variation: 'lg',
  sx:{gap: '1em'}
};

MainLg.decorators = [
  (Story) => (
    <div
      style={{
        width: '100%',
        border: '1px solid #fff2',
        backgroundColor: 'var(--bg-color)',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Story />
    </div>
  ),
];
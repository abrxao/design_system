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

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Main = Template.bind({});

Main.args = {
  children: (
    <Card>
      <CardImgBox>
        <Tag
          variation='purple'
          sx={{ top: '-.25em' }}>
          UNVALIABLE
        </Tag>
        <Image
          fill
          src={wallpaper}
          alt=''
        />
      </CardImgBox>
      <CardDescriptionBox>
        <Title variation='h2'>Description</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          alias aut magni officiis necessitatibus ipsum sit repellendus,
          perspiciatis illum asperiores harum? Est saepe aut, asperiores iste
          sunt consequuntur possimus explicabo?sadfasdasdasdasdasdasdasdas Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ea quis ducimus
          fugit quas tempore maxime molestiae delectus distinctio totam illum
          eaque ipsam, culpa recusandae quam necessitatibus odio. Atque,
          obcaecati nesciunt.
        </Text>
      </CardDescriptionBox>
    </Card>
  ),
};

Main.decorators = [
  (Story) => (
    <div style={{ width:'100%',border: '1px solid #fff2' }}>
      <Story />
    </div>
  ),
];
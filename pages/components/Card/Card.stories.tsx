import React from 'react';
import Card from './Card';
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import CardImgBox from '../CardImgBox/CardImgBox';
import Tag from '../Tag/Tag';
import Image from 'next/image';
import wallpaper from '../../../public/wallpaper.webp';
import CardDescriptionBox from '../CardDescriptionBox/CardDescriptionBox';
import Title from '../Title/Title';
import Text from '../Text/Text';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1em',
          backgroundColor: 'var(--bg-color)',
        }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    fullscreen: true,
  },
} as ComponentMeta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Main = Template.bind({});

Main.args = {
  children: (
    <>
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
    </>
  ),
};

export const Inset = Template.bind({});

Inset.args = {
  children: (
    <>
      <CardImgBox>
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
    </>
  ),
  variation: 'inset',
};

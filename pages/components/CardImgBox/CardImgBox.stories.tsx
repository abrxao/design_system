import React from 'react';
import CardImgBox from './CardImgBox';
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import Tag from '../Tag/Tag';
import Image from 'next/image';
import wallpaper from '../../../public/wallpaper.webp';

const meta: Meta<typeof CardImgBox> = {
  title: 'Components/CardImgBox',
  component: CardImgBox,
  CardImgBoxs: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width:'300px',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50px',
          backgroundColor: 'var(--bg-color)',
        }}>
        <Story/>
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    fullscreen: true
  },
} as ComponentMeta<typeof CardImgBox>;

export default meta;

type Story = StoryObj<typeof CardImgBox>;

const Template: ComponentStory<typeof CardImgBox> = (args) => <CardImgBox {...args} />;

export const Main = Template.bind({});

Main.args = {
  children: (
    <>
      <Tag
        variation='red md normal'>
        UNVALIABLE
      </Tag>
      <Image
        fill
        src={wallpaper}
        alt=''
      />
    </>
  )
};
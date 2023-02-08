import React from 'react';
import CardDescriptionBox from './CardDescriptionBox';
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import Title from '../Title/Title';
import Text from '../Text/Text';

const meta: Meta<typeof CardDescriptionBox> = {
  title: 'Components/CardDescriptionBox',
  component: CardDescriptionBox,
  CardDescriptionBoxs: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '300px',
          alignItems: 'center',
          justifyContent: 'center',
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
} as ComponentMeta<typeof CardDescriptionBox>;

export default meta;

type Story = StoryObj<typeof CardDescriptionBox>;

const Template: ComponentStory<typeof CardDescriptionBox> = (args) => (
  <CardDescriptionBox {...args} />
);

export const Main = Template.bind({});

Main.args = {
  children: (
    <>
      <Title variation='h3'>Lorem Ipsum</Title>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        dolores assumenda. Velit deserunt at molestias, minus facilis officiis
        et id. Totam aperiam, iusto beatae aliquid ea rerum. Libero, nostrum
        debitis.
      </Text>
    </>
  ),
};

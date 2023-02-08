import React from 'react';
import Title from './Title';
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  decorators: [
    (Story) =>(
      <div style={{backgroundColor:'var(--bg-color)',padding:'1em'}}>
        <Story />
      </div>
    ),
  ],

  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    fullscreen: true,
  },
} as ComponentMeta<typeof Title>;

export default meta;

type Story = StoryObj<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const h1 = Template.bind({});

h1.args = {
  variation: 'h1',
  children: 'Title',
};

export const h2 = Template.bind({});

h2.args = {
  variation: 'h2',
  children: 'Title',
};

export const h3 = Template.bind({});

h3.args = {
  variation: 'h3',
  children: 'Title',
};

export const h4 = Template.bind({});

h4.args = {
  variation: 'h4',
  children: 'Title',
};

export const h5 = Template.bind({});

h5.args = {
  variation: 'h5',
  children: 'Title',
};

export const h6 = Template.bind({});

h6.args = {
  variation: 'h6',
  children: 'Title',
};



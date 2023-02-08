import React from 'react';
import ToggleButton from './ToggleButton';
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
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
} as ComponentMeta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const Small = Template.bind({});

Small.args={
  id:'toggleSmall'
}

export const medium = Template.bind({});

medium.args = {
  id: 'toggleMedium',
  variation: 'md'
};

export const large = Template.bind({});

large.args = {
  id: 'toggleLarge',
  variation: 'lg',
};
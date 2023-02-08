import React from 'react';
import Text from './Text';
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
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
} as ComponentMeta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextMain = Template.bind({});

TextMain.args = {
  maxLines: 3,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quasi pariatur dolorem adipisci nostrum suscipit enim? Dicta totam officiis ipsam expedita assumenda. Reiciendis sed deserunt ipsum illum, dicta et maxime!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quasi pariatur dolorem adipisci nostrum suscipit enim? Dicta totam officiis ipsam expedita assumenda. Reiciendis sed deserunt ipsum illum, dicta et maxime!',
};

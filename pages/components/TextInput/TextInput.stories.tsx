import React from 'react';
import TextInput from './TextInput';
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '1rem 2rem',
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
} as ComponentMeta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const No_Validations= Template.bind({});

No_Validations.args={
    label:'label'
}

No_Validations.args = {
  label: 'label',
  required: true,
}


import React from 'react';
import SelectInput from './SelectInput';
import type { Meta, StoryObj, ComponentStory, ComponentMeta } from '@storybook/react';

const meta: Meta<typeof SelectInput> = {
  title: 'Components/SelectInput',
  component: SelectInput,
  SelectInputs: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '140px',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50px',
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
} as ComponentMeta<typeof SelectInput>;
  
  export default meta;
  
  type Story = StoryObj<typeof SelectInput>;
  
  const Template: ComponentStory<typeof SelectInput> = (args) => <SelectInput {...args} />;
  
  export const One = Template.bind({});

  One.args={
    disable:false,
    isLoading:false,
    title:'Select one',
    options:[' ', 'teste', 'teste2', 'teste3', 'teste4'],
    sx:{maxWidth: '140px'}
  }
    
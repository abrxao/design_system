import React from 'react';
import Button, {AppProps} from './Button';
import type { Meta, StoryObj, ComponentStory, ComponentMeta } from '@storybook/react';
import { SiAltiumdesigner } from 'react-icons/si';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes:{
    onClick: {action: 'clicked'}
  },
  decorators: [
    (Story)=>(
      <div
      style={{
        padding: '1rem 2rem',
        backgroundColor: 'var(--bg-color)'
      }}
      onChange={(e)=>{
        console.log(e.target);
      }}
      >
        <Story/>
      </div>
      )
    ],
    parameters: {
      layout: 'centered',
      fullscreen: true,
    },
  } as ComponentMeta<typeof Button>;
  
  export default meta;
  
  type Story = StoryObj<typeof Button>;
  
  const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
  
  export const Primary = Template.bind({});
    
    Primary.args={
      variation: 'primary',
      children:'button',
      Icon: (<SiAltiumdesigner/>)
    }
    
    export const Secondary = Template.bind({});
    Secondary.args={
      variation: 'secondary',
      children: 'button'
    };
    
    export const Outlined = Template.bind({});
    
    Outlined.args = {
      variation: 'outlined',
      children: 'button'  
    }
    
    export const Bt_line = Template.bind({});
    
    Bt_line.args ={
      variation:'bt-line',
      children:'button'
    }
    
    
    
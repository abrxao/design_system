import React from "react";
import RadioGroup from "./RadioGroup";
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  RadioGroups: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
          backgroundColor: "var(--bg-color)",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    fullscreen: true,
  },
} as ComponentMeta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const One = Template.bind({});

One.args = {
  label: "select one",
  options: ["one", "two", "three"],
};

import React from "react";
import Tag from "./Tag";
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
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
} as ComponentMeta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Purple = Template.bind({});

Purple.args = {
  variation: "purple",
  children: "Tag",
};

export const RedMd = Template.bind({});
RedMd.args = {
  variation: "red md",
  children: "Tag",
};

export const GreenLgInset = Template.bind({});

GreenLgInset.args = {
  variation: "green lg inset",
  children: "Tag",
};

export const Normal = Template.bind({});

Normal.args = {
  variation: "purple normal",
  children: "Tag",
};

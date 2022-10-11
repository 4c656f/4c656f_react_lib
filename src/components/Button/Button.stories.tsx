import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "4c656f_lib/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
    label: "Button",
    variant: "text",
    colorIndex: "0"
};

export const Contained = Template.bind({});
Contained.args = {
    label: "Button",
    variant: "contained",
    colorIndex: "0"
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: "Button",
    variant: "outlined",
    colorIndex: "0"
};


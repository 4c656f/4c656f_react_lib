import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";


export default {
    title: "4c656f_lib/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Placeholder',
    style: {width:"200px"}

};


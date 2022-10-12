import React, {useState} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import DropDown from "./DropDown";
import Input from "../Input/Input";


export default {
    title: "4c656f_lib/DropDown",
    component: DropDown,
} as ComponentMeta<typeof DropDown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropDown> = (args) => {

    const [value, setValue] = useState('')


    return (
        <DropDown {...args}>
            <div>child1</div>
            <div>child2</div>
            <div>child3</div>
            <div>child4</div>
        </DropDown>
    )
};

export const Default = Template.bind({});

Default.args = {
    colorIndex: "0",
    label: "someLabel"
}




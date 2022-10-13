import React, {useState} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import DropDown from "./DropDown";
import Input from "../Input/Input";
import MenuItem from "../MenuItem/MenuItem";


export default {
    title: "4c656f_lib/DropDown",
    component: DropDown,
} as ComponentMeta<typeof DropDown>;

const items = [
    { label: 'Moscow', value: 1 },
    { label: 'London', value: 2 },
    { label: 'Helsinki', value: 3 },
    { label: 'Rome', value: 4 },
    { label: 'Oslo', value: 5 },
];


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropDown> = (args) => {

    const [value, setValue] = useState('')


    return (
        <DropDown {...args}>
            {items.map((value, index)=>{
               return(
                   <MenuItem
                       key={value.value}
                       value={value.value}
                       disabled={index===1}
                   >
                       {value.label}
                   </MenuItem>
               )
            })}

        </DropDown>
    )
};

export const Default = Template.bind({});

Default.args = {
    colorIndex: "0",
    label: "someLabel"
}




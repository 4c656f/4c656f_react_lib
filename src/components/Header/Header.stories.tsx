import React, {useState} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Header from "./Header";
import {ArrowIcon} from "../../materials/icons";
import DropDown from "../DropDown/DropDown";
import MenuItem from "../MenuItem/MenuItem";
import HeaderItem, {HeaderItemProps} from "../HeaderItem/HeaderItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "4c656f_lib/Header",
    component: Header,
} as ComponentMeta<typeof Header>;

const items: HeaderItemProps[] = [
    {
        title: 'someTitle'
    },
    {
        title: 'someTitle2'
    }
]

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => {




    return (
        <Header {...args}>
            {items.map((value, index)=>{
                return(
                    <HeaderItem title={value.title}/>
                )
            })}

        </Header>
    )
};


export const Default = Template.bind({});
Default.args = {};
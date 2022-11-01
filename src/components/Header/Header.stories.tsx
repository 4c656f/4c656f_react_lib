import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Header from "./Header";
import HeaderSection, {HeaderSectionProps} from "../HeaderSection/HeaderSection";
import HeaderItem from "../HeaderItem/HeaderItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "4c656f_lib/Header",
    component: Header,
} as ComponentMeta<typeof Header>;




// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => {


    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                width: "100%",
                height: "100%"
            }}
        >
            <Header
                logoSection={<div>Logo</div>}
                mainSection={[
                    <HeaderItem key={'1'} title={'SomeTitle'}>
                        <HeaderSection
                            sectionTitle={<h1>SomeTitle</h1>}
                            headerSectionElems={[
                                {
                                    title: <h1 key={'3'}>sometitle</h1>,
                                    elements: [
                                        <h4 key={'4'}>someElement</h4>,
                                        <h4 key={'6'}>someElement1</h4>,
                                        <h4 key={'5'}>someElement2</h4>,
                                    ]
                                }
                            ]}
                        />
                    </HeaderItem>
                ]}
                rightSection={[<div key={'1'}>cart</div>]}
                {...args}
            />

        </div>
    )
};


export const Default = Template.bind({});
Default.args = {};
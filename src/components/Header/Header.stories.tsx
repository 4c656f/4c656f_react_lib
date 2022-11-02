import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Header from "./Header";
import HeaderSection, {HeaderSectionProps} from "../HeaderSection/HeaderSection";
import HeaderItem from "../HeaderItem/HeaderItem";
import {Button} from "../../index";
import {ArrowIcon} from "../../materials/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "4c656f_lib/Header",
    component: Header,
} as ComponentMeta<typeof Header>;






const mainSection = [
    <HeaderItem key={'1'} title={'SomeTitle'}>
        <HeaderSection
            sectionTitle={<h1>SomeTitle</h1>}
            headerSectionElems={[
                {
                    title: <h2 key={'3'}>someSectionTitle</h2>,
                    elements: [
                        <Button
                            variant={"primary"}
                            icon={<ArrowIcon/>}
                            defaultIconStyles={true}
                            colorIndex={"1"}
                            key={'4'}
                            children={"someLabel"}
                        />
                    ]
                }
            ]}
        />
    </HeaderItem>
]


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
                mainSection={mainSection}
                // rightSection={[<div key={'1'}>cart</div>]}
                {...args}
            />

        </div>
    )
};


export const Default = Template.bind({});
Default.args = {};
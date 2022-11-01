import React, {ElementType, useState} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Header from "./Header";
import {ArrowIcon} from "../../materials/icons";
import DropDown from "../DropDown/DropDown";
import MenuItem from "../MenuItem/MenuItem";
import HeaderItem, {HeaderItemProps} from "../HeaderItem/HeaderItem";
import HeaderSection, {HeaderSectionProps} from "../HeaderSection/HeaderSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "4c656f_lib/Header",
    component: Header,
} as ComponentMeta<typeof Header>;

type Items = {
    title: string
    headerSection: HeaderSectionProps<'a', 'button', 'button'>
}

const items: Items[] = [
    {
        title: 'someTitle',
        headerSection: {
            sectionTitle: {
                text: 'someCustomTitle'

            },
            headerSectionElems: [
                {
                    title: {
                        text: 'someSubTitle'
                    },
                    elems: [
                        {
                            span: 'someSpan',

                        },
                        {
                            span: 'someSpan2'
                        },
                        {
                            span: 'someSpan3'
                        },
                        {
                            span: 'someSpan4'
                        },
                    ]
                },
                {
                    title: {
                        text: 'someSubTitle2',

                    },
                    elems: [
                        {
                            span: 'someSpan'
                        },
                        {
                            span: 'someSpan2'
                        },
                        {
                            span: 'someSpan3'
                        },
                        {
                            span: 'someSpan4'
                        },
                    ]
                },
            ]
        }
    },
    {
        title: 'someTitle2',
        headerSection: {
            sectionTitle: {
                text: 'someCustomTitle',
                as: 'a'
            },
            headerSectionElems: [
                {
                    title: {
                        text: 'someSubTitle',

                    },
                    elems: [
                        {
                            span: 'someSpan'
                        }
                    ]
                },
            ]
        }
    },
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
        <Header {...args}>
            <div>Logo</div>
            <div>
                {
                    items.map((value, index) => {
                        return(
                            <HeaderItem title={value.title} key={value.title}>
                                {<HeaderSection
                                    sectionTitle={value.headerSection.sectionTitle}

                                    headerSectionElems={value.headerSection.headerSectionElems}
                                 />

                                }
                            </HeaderItem>
                        )
                    })
                }
            </div>
            <div>
                <div>some</div>
                <div>some2</div>
            </div>
        </Header>
        </div>
    )
};


export const Default = Template.bind({});
Default.args = {};
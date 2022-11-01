import React, {ComponentProps, ElementType, FC} from 'react';
import classes from './HeaderSection.module.scss'
import {ButtonType} from "../../types/IElementType";
import {IColorIndex} from "../../types/IColorIndex";


type ButtonCustomProps<E extends ElementType = ElementType> = {
    label: string,
    variant: ButtonType,
    colorIndex: IColorIndex,
    isDisabled?: boolean,
    isChecked?: boolean,
    Icon?: SvgrComponent,
    as?: E
}


type ButtonProps<E extends ElementType> =
    ButtonCustomProps<E> & Omit<ComponentProps<E>, keyof ButtonCustomProps>


type headerSectionElem<title extends ElementType, elems extends ElementType> = {
    title: {
        title: string
        as?: title
    } & ComponentProps<title>,
    elems: {
        span: string,
        as?: elems
    } & ComponentProps<elems>
}
type HeaderSectionProps<asSectionTitle extends ElementType,
    asTitleOfElem extends ElementType,
    asButtonOfElem extends ElementType> = {
    sectionTitle: {
        text: string;
        as?: asSectionTitle
    },
    headerSectionElems: headerSectionElem<asTitleOfElem, asButtonOfElem>[]


}

const defaultSectionTitle = "button";
const defaultTitleOfElem = "button";
const defaultButtonOfElem = "button";
const HeaderSection: FC<HeaderSectionProps<ElementType, ElementType, ElementType>> =
    <asSectionTitle extends ElementType = typeof defaultSectionTitle,
        asTitleOfElem extends ElementType = typeof defaultTitleOfElem,
        asButtonOfElem extends ElementType = typeof defaultButtonOfElem,
        >
    (props: HeaderSectionProps<ElementType, ElementType, ElementType>) => {

        const {} = props


        return (
            <menu
                className={classes.container}
            >

            </menu>
        );
    };

export default HeaderSection;
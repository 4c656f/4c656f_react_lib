import React, {ComponentProps, ElementType, FC} from 'react';
import classes from './HeaderSection.module.scss'
import {ButtonType} from "../../types/IElementType";
import {IColorIndex} from "../../types/IColorIndex";


type headerSectionElemButton<E extends ElementType> = {
    span: string,
    as?: E
} & ComponentProps<E>
type headerSectionElem<title extends ElementType, elems extends ElementType> = {
    title: {
        text: string
        as?: title
    } & ComponentProps<title>,
    elems: headerSectionElemButton<elems>[]
}


type sectionTitleProps<E extends ElementType = ElementType> ={
    text: string;
    as?: E
} & ComponentProps<E>



export type HeaderSectionProps<asSectionTitle extends ElementType,
    asTitleOfElem extends ElementType,
    asButtonOfElem extends ElementType> = {
    sectionTitle: sectionTitleProps<asSectionTitle>,
    headerSectionElems: headerSectionElem<asTitleOfElem, asButtonOfElem>[]
}

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


const defaultElement = "button";

const defaultSectionTitle = "button";
const defaultTitleOfElem = "button";
const defaultButtonOfElem = "button";

const HeaderSection: FC<HeaderSectionProps<ElementType, ElementType, ElementType>> =
    <asSectionTitle extends ElementType = 'button',
        asTitleOfElem extends ElementType = 'button',
        asButtonOfElem extends ElementType = 'button',
        >
    (props: HeaderSectionProps<asSectionTitle, asTitleOfElem, asButtonOfElem>) => {

        const {
            sectionTitle: {
                text,
                as,
                children,
                className: sectionTitleClassName,
                ...sectionTitleRest
            },
            headerSectionElems
        } = props

        const SectionTitle = as || defaultSectionTitle


        return (
            <menu
                className={classes.container}
            >
                <SectionTitle
                    className={`${classes.main_title} ${sectionTitleClassName}`}
                    {...sectionTitleRest}
                >{text}{children}</SectionTitle>

                {headerSectionElems.map((value, index) => {
                    const {
                        text,
                        as: AsTitleOfElem,
                        className: titleOfElemClassName,
                        ...titleRest
                    } = value.title

                    const TitleOfElem = AsTitleOfElem || defaultTitleOfElem


                    return (
                        <div
                            key={text}
                        >
                            <TitleOfElem
                                className={`${classes.section_title} ${titleOfElemClassName}`}
                                {...titleRest}
                            >
                                {text}
                            </TitleOfElem>

                            {value.elems.map((value1, index1) => {
                                const {
                                    span,
                                    as: AsButtonOfElem,
                                    className: buttonOfElemClassName,
                                    ...buttonOfElemRest
                                } = value1
                                const ButtonOfElem = AsButtonOfElem || defaultButtonOfElem

                                return (
                                    <ButtonOfElem
                                        key={span}
                                        className={`${classes.section_element} ${buttonOfElemClassName}`}
                                        {...buttonOfElemRest}
                                    >{span}</ButtonOfElem>
                                )
                            })}
                        </div>
                    )
                })}
            </menu>
        );
    };

export default HeaderSection;
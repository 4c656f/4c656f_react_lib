import React, {ComponentProps, ElementType, FC} from 'react';
import classes from "./Button.module.scss"
import {IColorIndex} from "../../types/IColorIndex";
import {ButtonType} from "../../types/IElementType";


type customElementsPick = JSX.IntrinsicElements['button'|'a'];


type ButtonCustomProps<E extends ElementType = ElementType> = {
    label: string,
    variant: ButtonType,
    colorIndex: IColorIndex,
    isDisabled?: boolean,
    isChecked?: boolean,
    as?: E
}


type ButtonProps<E extends ElementType> =
    ButtonCustomProps<E> & Omit<ComponentProps<E>, keyof ButtonCustomProps>




const defaultElement = "button";




const Button:FC<ButtonProps<ElementType>> = <E extends ElementType = typeof defaultElement>(
    {
        label,
        variant,
        colorIndex,
        isChecked,
        isDisabled,
        as,
        ...rest
    }:ButtonProps<E>
) => {

    const Element = as || defaultElement;

    
    return (
        <Element
            className={`${classes.container}
            ${classes[variant]}
            ${classes[`${colorIndex}_index`]}
            ${isChecked?classes['checked']:""}
            ${isDisabled?classes['disabled']:""}
            `}
            {...rest}
        >
            {label}
        </Element>
    );
};





export default Button;
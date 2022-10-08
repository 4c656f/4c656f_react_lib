import React, {ComponentProps, ElementType, FC} from 'react';
import classes from "./Button.module.scss"
import {IColorIndex} from "../types/IColorIndex";
import {ButtonType} from "../types/IElementType";




type ButtonCustomProps<E extends ElementType = ElementType> = {
    label: string,
    variant: ButtonType,
    colorIndex: IColorIndex,
}


type ButtonProps<E extends ElementType> =
    ButtonCustomProps<E> & Omit<ComponentProps<E>, keyof ButtonCustomProps>




const defaultElement = "button";

const Button = <E extends ElementType = typeof defaultElement>(
    {
        label,
        variant,
        colorIndex,
        ...rest
    }:ButtonProps<E>
) => {

    

    
    return (
        <button className={`${classes.container} ${classes[variant]} ${classes[`${colorIndex}_index`]}`}>{label}</button>
    );
};

export default Button;
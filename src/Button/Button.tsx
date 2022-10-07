import React, {ComponentProps, ElementType, FC} from 'react';
import classes from "./Button.module.css"
import "../index.css"


export type ButtonType = "text"|"contained"|"outlined"

type ButtonCustomProps<E extends ElementType = ElementType> = {
    label: string,
    variant: ButtonType,
    colorIndex: "",

}


type ButtonProps<E extends ElementType> =
    ButtonCustomProps<E> & Omit<ComponentProps<E>, keyof ButtonCustomProps>




const defaultElement = "button";

const Button = <E extends ElementType = typeof defaultElement>(
    {
        label,
        variant,
        index,
        ...rest
    }:ButtonProps<E>
) => {

    

    
    return (
        <button className={"index"}>Insurance</button>
    );
};

export default Button;
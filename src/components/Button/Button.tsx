import React, {ComponentProps, ElementType, FC} from 'react';
import classes from "./Button.module.css"
import "../../index.css"


type ButtonCustomProps<E extends ElementType = ElementType> = {

}


type ButtonProps<E extends ElementType> =
    ButtonCustomProps<E> & Omit<ComponentProps<E>, keyof ButtonCustomProps>




const defaultElement = "button";

const Button:FC = <E extends ElementType = typeof defaultElement>(
    {

    }:ButtonProps<E>
) => {

    

    
    return (
        <div className={classes.container}>
            <button className={"index"}>Insurance</button>
        </div>
    );
};

export default Button;
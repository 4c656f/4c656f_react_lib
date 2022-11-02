import React, {cloneElement, ComponentProps, ElementType, FC, ReactElement, ReactNode} from 'react';
import classes from "./Button.module.scss"
import {IColorIndex} from "../../types/IColorIndex";
import {ButtonType} from "../../types/IElementType";


type customElementsPick = JSX.IntrinsicElements['button' | 'a'];


type ButtonCustomProps<E extends ElementType = ElementType> = {
    variant?: ButtonType,
    colorIndex?: IColorIndex,
    isDisabled?: boolean,
    isChecked?: boolean,
    icon?: ReactElement<any, any>,
    defaultIconStyles?: boolean,
    children?: ReactNode
    as?: E
}


type ButtonProps<E extends ElementType> =
    ButtonCustomProps<E> & Omit<ComponentProps<E>, keyof ButtonCustomProps>


const defaultElement = "button";


const Button: FC<ButtonProps<ElementType>> = <E extends ElementType = typeof defaultElement>(
    {
        variant = "text",
        colorIndex = "0",
        isChecked,
        isDisabled,
        as,
        icon,
        className,
        defaultIconStyles,
        children,
        ...rest
    }: ButtonProps<E>
) => {

    const Element = as || defaultElement;

    const classNames = [
        `${className ? className : ""}`,
        classes.container,
        `${classes[variant]}`,
        `${classes[`${colorIndex}_index`]}`,
        `${isChecked ? classes['checked'] : ""}`,
        `${isDisabled ? classes['disabled'] : ""}`,


    ]

    return (
        <Element
            className={classNames.join(' ')}
            {...rest}
        >
            {children}
            {icon&&defaultIconStyles?cloneElement(icon, {
               className: `${icon.props.className} ${classes.icon}`
            }):icon}
        </Element>
    );
};


export default Button;
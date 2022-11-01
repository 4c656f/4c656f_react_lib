import React, {ComponentProps, ElementType, FC} from 'react';
import classes from "./Button.module.scss"
import {IColorIndex} from "../../types/IColorIndex";
import {ButtonType} from "../../types/IElementType";


type customElementsPick = JSX.IntrinsicElements['button' | 'a'];


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


const Button: FC<ButtonProps<ElementType>> = <E extends ElementType = typeof defaultElement>(
    {
        label,
        variant,
        colorIndex,
        isChecked,
        isDisabled,
        as,
        Icon,
        className,
        ...rest
    }: ButtonProps<E>
) => {

    const Element = as || defaultElement;

    const classNames = [
        classes.container,
        `${classes[variant]}`,
        `${classes[`${colorIndex}_index`]}`,
        `${isChecked ? classes['checked'] : ""}`,
        `${isDisabled ? classes['disabled'] : ""}`,
        `${className ? className : ""}`

    ]

    return (
        <Element
            className={classNames.join(' ')}
            {...rest}
        >
            {label}
            {Icon ?
                <Icon
                    className={classes.icon}
                />
                :
                null}
        </Element>
    );
};


export default Button;
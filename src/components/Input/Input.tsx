import React, {cloneElement, FC, InputHTMLAttributes, ReactElement, ReactNode} from 'react';
import classes from './Input.module.scss'
import {IColorIndex} from "../../types/IColorIndex";
import {IElementsSize} from "../../types/IElementsSize";

type InputOwnProps = {
    colorIndex?: IColorIndex;
    icon?: ReactElement;
    size?: IElementsSize,
    defaultIconStyles?:boolean
}


type ButtonProps = InputOwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputOwnProps>



const Input: FC<ButtonProps> = (props) => {

    const {
        icon,
        className,
        colorIndex = "0",
        size = 'medium',
        defaultIconStyles,
        ...rest
    } = props

    const inputClasses = [
        classes.container,
        `${classes[`color_${colorIndex}_index`]}`,
        `${className ? className : ""}`,
        classes[size]
    ]

    return (

        <div className={classes.main_container}>
            <input
                className={inputClasses.join(' ')}
                type={'text'}

                {...rest}
            />
            {icon&&defaultIconStyles?cloneElement(icon, {
                className: `${icon.props.className} ${classes.icon}`
            }):icon}
        </div>

    );
};

export default Input;
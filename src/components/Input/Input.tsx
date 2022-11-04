import React, {cloneElement, FC, InputHTMLAttributes, ReactElement, ReactNode} from 'react';
import classes from './Input.module.scss'
import {IColorIndex} from "../../types/IColorIndex";

type InputOwnProps = {
    colorIndex?: IColorIndex;
    icon?: ReactElement;
    defaultIconStyles?:boolean
}


type ButtonProps = InputOwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputOwnProps>



const Input: FC<ButtonProps> = (props) => {

    const {
        icon,
        className,
        colorIndex = "0",
        defaultIconStyles,
        ...rest
    } = props

    return (

        <div className={classes.main_container}>
            <input
                className={`${classes.container} ${classes[`color_${colorIndex}_index`]} ${className ? className : ""}`}
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
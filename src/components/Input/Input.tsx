import React, {FC, InputHTMLAttributes} from 'react';
import classes from './Input.module.scss'
import {IColorIndex} from "../../types/IColorIndex";

type InputOwnProps = {
    colorIndex?: IColorIndex;
    Icon?: SvgrComponent;
}


type ButtonProps = InputOwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputOwnProps>

const defaultClasses = [classes['container']]

const Input: FC<ButtonProps> = (props) => {

    const {
        Icon,
        className,
        colorIndex,
        ...rest
    } = props

    return (

        <div className={classes.main_container}>
            <input
                className={`${defaultClasses.join(" ")} ${colorIndex ? classes[`${colorIndex}_index`] : classes["0_index"]} ${className ? className : ""}`}
                type={'text'}

                {...rest}
            />
            {Icon ?
                <Icon
                    className={classes.icon}
                />
                :
                null
            }
        </div>

    );
};

export default Input;
import React, {FC, InputHTMLAttributes} from 'react';
import classes from './Input.module.scss'
import {IColorIndex} from "../../types/IColorIndex";

type InputOwnProps = {
    colorIndex?: IColorIndex;

}


type ButtonProps = InputOwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputOwnProps>

const defaultClasses = [classes['container']]

const Input: FC<ButtonProps> = ({
                                    className,
                                    colorIndex,
                                    ...rest
                                }) => {


    return (
        <input
            className={`${defaultClasses.join(" ")} ${colorIndex ? classes[`${colorIndex}_index`] : classes["0_index"]} ${className ? className : ""}`}
            type={'text'}

            {...rest}
        />
    );
};

export default Input;
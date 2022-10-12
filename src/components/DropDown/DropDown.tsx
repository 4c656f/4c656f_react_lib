import React, {Children, cloneElement, FC, isValidElement, ReactElement, useState,} from 'react';
import classes from "./DropDown.module.scss"
import {IColorIndex} from "../../types/IColorIndex";

type DropDownProps = {
    colorIndex: IColorIndex,
    label: string,
    onChange?: () => void,
    children?: ReactElement<any, "div"> | ReactElement<any, "div">[],
}

const DropDown: FC<DropDownProps> = (props: DropDownProps) => {


    const {
        colorIndex,
        label,
        onChange,
        children
    } = props


    const [isOpen, setIsOpen] = useState(false)

    const [activeValue, setActiveValue] = useState()

    const handleOpen = () => {
        setIsOpen(prevState => !prevState)
    }



    return (
        <div
            className={`${classes.container}`}
        >
            <button
                className={`${classes.toggle} ${classes[`${colorIndex}_index`]}`}
                onClick={handleOpen}
            >
                {label}
            </button>

            {isOpen ?
                <menu
                    className={classes.menu}
                >
                    {
                        Children.map(children, (child, index) => {
                            if (isValidElement(child)) {
                                return cloneElement(child, {
                                    onClick: () => console.log('click'),
                                })
                            }
                        })
                    }
                </menu> :
                null

            }

        </div>
    );
};

export default DropDown;
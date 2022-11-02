import React, {FC, ReactElement} from 'react';
import Button from "../Button/Button";
import classes from './HeaderItem.module.scss'

export type HeaderItemProps = {
    title: string;
    children: ReactElement<any, any>
}

const HeaderItem: FC<HeaderItemProps> = (props: HeaderItemProps) => {

    const {
        title,
        children
    } = props


    return (
        <section
            className={classes.container}
        >
            <section
                className={classes.section}
            >
                {children}
            </section>
            <Button
                className={classes.button}
                children={title}
                variant={'text'}
                colorIndex={'0'}
            />

        </section>
    );
};

export default HeaderItem;
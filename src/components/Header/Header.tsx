import React, {Children, cloneElement, ElementType, FC, isValidElement, ReactElement} from 'react';
import HeaderItem from '../HeaderItem/HeaderItem';
import classes from './Header.module.scss'

type HeaderProps = {
    children?: [
        ReactElement<any, any>,
        ReactElement<any, any>[],
        ReactElement<any, any>[]
    ]
}

const Header:FC<HeaderProps> = (props:HeaderProps) => {

    const {
        children
    } = props

    
    return (
        <header
            className={classes.container}
        >
            <section>
                {children}
            </section>
            <section>
                {children?.[1].map((value, index) => {
                    return (value)
                })}
            </section>
            <section>
                {children?.[2].map((value, index) => {
                    return(value)
                })}
            </section>
            
        </header>
    );
};

export default Header;
import React, {
    Children,
    cloneElement,
    ComponentProps,
    ElementType,
    FC,
    isValidElement,
    PropsWithChildren,
    ReactElement
} from 'react';
import HeaderItem from '../HeaderItem/HeaderItem';
import classes from './Header.module.scss'

type props = {
    children: ReactElement[]
} & PropsWithChildren

type HeaderProps = {
    children?: [
        ReactElement<any, any>,
        ReactElement<props, any>,
        ReactElement<props, any>,
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
            <section
                className={classes.sections}
            >
                {children?.[0]}
            </section>
            <section
                className={classes.sections}
            >
                {(()=>{
                    if(isValidElement(children?.[1])){
                        return children?.[1].props.children.map((value, index) => {
                            return value
                        })

                    }else{
                        return null
                    }
                })()}
            </section>
            <section
                className={classes.sections}
            >
                {(()=>{
                    if(isValidElement(children?.[2])){
                        return children?.[2].props.children.map((value, index) => {
                            return value
                        })

                    }else{
                        return null
                    }
                })()}
            </section>
            
        </header>
    );
};

export default Header;
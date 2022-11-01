import React, {FC, ReactElement} from 'react';
import classes from './HeaderSection.module.scss'

type headerSectionElems = {
    title?: ReactElement<any, any>;
    elements?: ReactElement<any, any>| ReactElement<any, any>[]
}

export type HeaderSectionProps = {
    sectionTitle?: ReactElement<any, any>,
    headerSectionElems?: headerSectionElems[]
}


const HeaderSection: FC<HeaderSectionProps> =

    (props: HeaderSectionProps) => {

        const {
            sectionTitle,
            headerSectionElems
        } = props


        return (
            <menu
                className={classes.container}
            >

                {sectionTitle}

                {headerSectionElems?.map(value => {
                    return(
                        value.title,
                        value.elements
                    )
                })}
            </menu>
        );
    };

export default HeaderSection;
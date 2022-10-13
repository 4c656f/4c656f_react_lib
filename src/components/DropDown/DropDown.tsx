import React, {
    Children,
    cloneElement,
    FC,
    isValidElement,
    ReactElement,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import {ReactComponent as ArrowIcon} from "../../materials/icons/ArrowSmall.svg"

import classes from "./DropDown.module.scss"
import {IColorIndex} from "../../types/IColorIndex";
import MenuItem from "../MenuItem/MenuItem";

type DropDownProps<TItem = any> = {
    colorIndex: IColorIndex;
    label: string;
    onChange?: (item: TItem)=>void;
    children?: ReactElement<any, "div"> | ReactElement<any, "div">[];
}

const DropDown: FC<DropDownProps> = <T extends unknown>(props: DropDownProps<T>) => {


    const {
        colorIndex,
        label,
        onChange,
        children
    } = props


    const [isOpen, setIsOpen] = useState(false)

    const [activeIndex, setActiveIndex] = useState(-1)

    const [chosenIndex, setChosenIndex] = useState(-1)


    const elements = useRef<Record<number, HTMLDivElement>>({});

    const handleOpen = () => {

        setIsOpen(prevState => !prevState)
    }

    const items = useMemo(() => Children.toArray(children), [children]);



    const indexes = useMemo(()=>{
        return items.reduce<number[]>((acum, value, index)=>{
            if(isValidElement(value)){
                if(value.type === MenuItem && !value.props.disabled){
                    acum.push(index)
                    return acum
                }
            }

            return acum
        }, [])
    }, [items])
    
    const handleActive = (item:any) => {
        if(onChange)onChange(item)
        setIsOpen(false)
        setActiveIndex(item)
    }
    
    const handleKeyDown = (event: KeyboardEvent) => {
        console.log("keyDown")

        switch (event.code) {
            case 'ArrowDown':
                event.preventDefault();
                event.stopPropagation();
                setChosenIndex(highlightedIndex => {
                    const index = highlightedIndex === indexes.length - 1 ? 0 : highlightedIndex + 1;
                    elements.current[indexes[index]]?.scrollIntoView({
                        block: 'nearest',
                    });
                    return index;
                });
                break;
            case 'ArrowUp': {
                event.preventDefault();
                event.stopPropagation();
                setChosenIndex(highlightedIndex => {
                    const index = highlightedIndex === 0 ? indexes.length - 1 : highlightedIndex - 1;
                    elements.current[indexes[index]]?.scrollIntoView({
                        block: 'nearest',
                    });
                    return index;
                });
                break;
            }
            case 'Enter':{
                event.preventDefault();
                event.stopPropagation();
                const item = items[indexes[chosenIndex]];
                if (chosenIndex !== -1 && isValidElement(item)) {
                    handleActive(item.props.value);
                }
                break;
            }
        }
    }


    useEffect(() => {
        if (isOpen) document.addEventListener('keydown', handleKeyDown, true)


        return () => document.removeEventListener('keydown', handleKeyDown, true)
    }, [isOpen])

    return (
        <div
            className={`${classes.container}`}
        >

            <button
                className={`${classes.toggle} ${classes[`${colorIndex}_index`]}`}
                onClick={handleOpen}
            >
                {label}
                <ArrowIcon
                    style={{
                        transform: `rotate(${isOpen?180:0}deg)`
                    }}
                    className={classes.icon}

                />
            </button>

            {isOpen ?
                <menu
                    className={classes.menu}

                >
                    {
                        Children.map(children, (child, index) => {
                            if (isValidElement(child)) {

                                return cloneElement(child, {
                                    active: activeIndex === index,
                                    chosen: indexes[chosenIndex] === index,
                                    onClick: (e:MouseEvent) => {
                                        handleActive(index)
                                    },
                                    ref: (node: HTMLDivElement) => {
                                        elements.current[index] = node;
                                    }
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
import React, {
    Children,
    cloneElement,
    FC,
    isValidElement,
    ReactElement, useCallback,
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
    search?: boolean;
    colorIndex: IColorIndex;
    label: string;
    onChange?: (item: TItem)=>void;
    children?: ReactElement<any, "div">[];
}

const DropDown: FC<DropDownProps> = <T extends unknown>(props: DropDownProps<T>) => {


    const {
        search,
        colorIndex,
        label,
        onChange,
        children
    } = props


    const [isOpen, setIsOpen] = useState(false)

    const [activeIndex, setActiveIndex] = useState(-1)

    const [chosenIndex, setChosenIndex] = useState(-1)

    const [menuAnimClass, setMenuAnimClass] = useState("")

    const [searchValue, setSearchValue] = useState('')

    const elements = useRef<Record<number, HTMLDivElement>>({});

    const handleOpen = () => {


        if(isOpen){
            setChosenIndex(-1)
            setMenuAnimClass('hide')

            setTimeout(()=>{
                setIsOpen(prevState => !prevState)
            },200)

        }else{
            setMenuAnimClass('')
            setIsOpen(prevState => !prevState)
        }



    }

    const items = useMemo(() => Children.toArray(children), [children]);





    const indexes = useMemo(()=>{
        return items.reduce<number[]>((acum, value, index)=>{
            if(isValidElement(value)){

                if(value.type === MenuItem && !value.props.disabled){
                    if(search?value.props.children.toLowerCase().includes(searchValue.toLowerCase()):true){
                        console.log("indexes")
                        acum.push(index)
                        return acum
                    }

                }
            }

            return acum
        }, [])
    }, [items, search?searchValue:null])


    
    const handleActive = (item:any) => {
        // if(onChange)onChange(item)
        handleOpen()

        setActiveIndex(item)
        console.log("keyDown", item)
    }
    
    const handleKeyDown = useCallback((event: KeyboardEvent) => {


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
                    const index = highlightedIndex <= 0 ? indexes.length - 1 : highlightedIndex - 1;
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
                console.log(indexes, chosenIndex, item)
                if (chosenIndex !== -1 && isValidElement(item)) {
                    handleActive(indexes[chosenIndex]);
                }
                break;
            }
        }
    },[chosenIndex, indexes])





    useEffect(() => {
        if (isOpen) document.addEventListener('keydown', handleKeyDown, true)

        return () => document.removeEventListener('keydown', handleKeyDown, true)
    }, [isOpen, handleKeyDown])



    return (
        <div
            className={`${classes.container}`}
        >

            <button
                className={`${classes.toggle} ${classes[`${colorIndex}_index`]}`}
                onClick={handleOpen}
            >
                {activeIndex>=0?children?children[activeIndex].props.children:label:label}
                <ArrowIcon
                    style={{
                        transform: `rotate(${isOpen?180:0}deg)`
                    }}
                    className={classes.icon}

                />
            </button>

            {isOpen ?
                <menu
                    className={`${classes.menu} ${menuAnimClass?classes[menuAnimClass]:""}`}
                >
                    {search?
                        <input
                            value={searchValue}
                            onChange={(e)=>setSearchValue(e.target.value)}
                        />:
                        null
                    }
                    {
                        Children.map(children, (child, index) => {
                            if (isValidElement(child)) {
                                if(search?child.props.children.toLowerCase().includes(searchValue.toLowerCase()):true){
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
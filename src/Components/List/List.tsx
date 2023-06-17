import data from "../../data.ts";
import {FC, useState} from "react";
// import ListItem from "../ListItem";

const List = () => {

    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index: number) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <div className='accordion'>
            <ul className="accordion__list p-4 text-amber-200 border-2 border-amber-50 rounded-md">
                {data.map((listItem, index) =>
                    <li onClick={() => handleClick(index)} className="accordion__item p-2 border-2 border-amber-500 rounded">
                        <h2 className="item__title text-center text-xl font-bold hover:text-sky-200">{listItem.title}</h2>
                        {index === activeIndex && <p className="item__text">{listItem.text}</p>}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default List

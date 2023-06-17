import {FC, useState} from "react";

type Props = {
    title: string,
    text: string,
}
const ListItem: FC<Props> = ({title, text}) => {
    const [showText, setShowText] = useState(false)

    const handleTitleClick = () => setShowText(!showText)

    return (
        <li className="accordion__item p-2 border-2 border-amber-500 rounded">
            <h2 onClick={handleTitleClick}
                className="item__title text-center text-xl font-bold hover:text-sky-200">{title}</h2>
            {showText && <p className="item__text">{text}</p>}
        </li>
    )
}

export default ListItem

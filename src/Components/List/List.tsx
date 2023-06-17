import data from "../../data.ts";
import ListItem from "../ListItem";

const List = () => (
    <div className='accordion'>
        <ul className="accordion__list p-4 text-amber-200 border-2 border-amber-50 rounded-md">
            {data.map((listItem) =>
                <ListItem key={listItem.id} title={listItem.title} text={listItem.text}/>
            )}
        </ul>
    </div>
)

export default List

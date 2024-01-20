import { data } from "./data";

function Buttons({filteredItems, setArt}){
    return(
        <div className="container-btn">
            <button className="btn" onClick={()=>setArt(data)}>All Categories</button>
            <button className="btn" onClick={()=>filteredItems('watercolor')}>Watercolor</button>
            <button className="btn" onClick={()=>filteredItems('abstractionism')}>Abstractionism</button>
            <button className="btn" onClick={()=>filteredItems('ceramic')}>Ceramic</button>
            <button className="btn" onClick={()=>filteredItems('sculpture')}>Sculpture</button>
        </div>
    )
}
export default Buttons;
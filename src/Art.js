import { useState } from "react";
import Buttons from "./Buttons";
import{data} from './data';
import ArtItem from "./ArtItem";


function Art(){
const[art, setArt]=useState(data);
const chosenItems=(searchTerm)=>{
    const newItems=data.filter(element=>element.searchTerm===searchTerm);
    setArt(newItems);
}

    return(<div>
        <div className="container">
            <h1 className="heading">ART</h1>
        </div>
        <Buttons filteredItems={chosenItems}  setArt={setArt}/>
        <ArtItem itemsForSale={art}/>
        <div className="container">
            <p className="par-art">Please ask all questions regarding the purchase of paintins by phone +38412741244</p>
        </div>
    </div>)
}
export default Art;
import { dataSliders } from "./dataSliders";
import{useState} from "react";

function Slider(){

const [photo,setPhoto]=useState(0);


    const previousPhoto=()=>{
        setPhoto((photo=>{
            photo--;
            if (photo<0){
                return dataSliders.length-1;
            }
            return photo;
        }))
    }
    const nextPhoto=()=>{
        setPhoto((photo=>{
            photo++;
            if(photo>dataSliders.length-1){
                photo=0
            }
            return photo;
        }))
    }
return<div>
        <div className="container">
            <button className="cta" onClick={previousPhoto}>◀︎</button>
            <img src={dataSliders[photo]} width='500px' height='680px' alt='art' className="photo"/>
            <button className="cta" onClick={nextPhoto}>▶︎</button>
    </div>
</div>
}
export default Slider;
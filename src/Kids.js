import image from './kidsmasterclass.png'


function Kids(){

        return<div>
            <div className="container">
                <h2>Kids</h2>
            </div>
            <div className="photo-container">
                <img src={image} width="800px" height="600px" alt="kids" className='photo-kids'/>
                <div className="par-container">
                    <p>Children will greatly enjoy our lessons. The aim is to give adolescents a place where they can live out their creativity and let their imagination run wild.</p>
                    <br/>
                    <p>Drowing is intended to increase the conscious perception of art and promote cognitive abilities as well as the personality and self-confidence of the children.</p>
                    <br/>
                    <p>With children, we have a wonderful spacious studio. Master classes are held in the middle of the day on weekdays and weekends.</p>
                    <br/>
                    <p>The cost of a lesson in a group is 6 euros, up to an individual lesson is 20 euros. For more accurate information, please call +38412741244</p>
                </div>
            </div>
        </div> 
    }
    
export default Kids;
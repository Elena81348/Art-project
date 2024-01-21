
import video from './artvideo.mp4';
import image from './instagramColor.png'


function Home(){
    return(
        <div className="App">
            <div className="video-block">
                <video autoPlay muted loop >
                    <source src={video} type='video/mp4'/>
                </video>
            </div>  
            <div className='block'>
                <h1 className='head-block'>Creative Studio "OLGA BUDNIKOVA" for kids and adults in the center of Leipzig provides painting training services.</h1>
            </div>
            <div className='first-page'>
                <img src={`./firstpage1.jpg`} width='300px'height='220px' alt='art' className='art-block'/> 
                <img src={`./firstpage2.jpg`} width='300px' height='220px'alt='art' className='art-block'/> 
                <img src={`./firstpage3.jpg`} width='300px'height='220px' alt='art'className='art-block'/> 
                <img src={`./firstpage4.jpg`} width='300px'height='220px' alt='art' className='art-block'/> 
            </div>
            <div className='block'>
            <p className='par-block'>Follow along on instagram </p>
            <p className='par-block'><a  href="https://www.instagram.com/elena_tlc/"><img src={image} width="90px" alt="instagram" className='instagram-img'/></a></p>
            </div>
            
        </div>
    )
}
export default Home;
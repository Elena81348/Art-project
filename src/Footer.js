import imageMail from './mail.png';
import imageInstagram from './instagram.png';

function Footer(){

    return(<div>
        <footer>
            <p > 📞 <a href="+38412741244" className="contacts">+38412741244</a></p>
            <p ><img  src={imageMail} width='24px' alt='mail' className='contact-img'/><a href="info@budnikova.com" className="contacts">info@budnikova.com</a> </p>
            <p className="contacts">  04150, Leipzig, Golis,5</p>
            <p><a  href="https://www.instagram.com/elena_tlc/"><img src={imageInstagram} width="30px" alt="instagram" className='contact-img'/></a></p>
    </footer>
    </div>)
}
export default Footer;
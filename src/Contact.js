function Contact(){
    return (<div className="wrapper">
        <div className='content'>
        <div className="container">
            <h2 >Contact</h2>
        </div>
        <div className="container">
            <p className="par">If you wish to receive available works or you have any inquiries please write to info@budnikova.com or send your message below:</p>
        </div>
        
        <div className='contactForm'>
        <form  action="https://formspree.io/f/xeqndrzw"  method="POST">
            <input type="hidden" name="_language" value="en" />
        <div className="container">
            
            <input type="text" className="text-input" name="name" placeholder="First name" required=" "/>    
        </div>
        <div className="container">
            
            <input type="text" className="text-input" name="name" placeholder="Last name" required=" "/>    
        </div>
        <div className="container">
            
            <input type="email" className="text-input" name="email" placeholder="Your email" required=" "/>    
        </div>
        <div className="container">
            
            <input type="text" className="text-input" name="subject" placeholder="Subject" required=" "/>    
        </div>
        <div className="container">
            <textarea className="text-input" name="message" placeholder="Your message..." required=" "></textarea>
            
        </div>
        <div className="container">
            <button className="btnForm" type="submit">Send</button>
        </div>
        </form>
        </div>
        <img  src={`./contactPhoto.jpg`} width='400px' height='300px' alt='paint' className='contacts-art'/>
        </div>
    </div>)
}
export default Contact;
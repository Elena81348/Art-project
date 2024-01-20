import Slider from "./Slider";

function About(){
    return(<div>
        <div className="container">
            <h2>ABOUT ME</h2>
        </div>
        <div className="information">
            <Slider />
            <div className="par-about">
                <p>The desire to create arose in me in my childhood, so I got acquainted with creativity even before I could speak. Since I lived in a picturesque corner of Ukraine, my first creations were related to nature.</p>
                <br/>
                <p>The first works and attempts at paint turned out to be successful, and my parents noticed my craving for art. They supported me in everything, so, one might say, with their help, I decided on the profession of the future while I was still a child.</p>
                <br/>
                <p>The art school gave me a lot of knowledge and good acquaintances in the field of art. The support of my parents and friends encouraged me to create master classes in my teens.</p>
                <br/>
                <p>To me, being a creative person means finding  your own way of self-expression, and I really want to help those who want to find themselves through creativity.</p>
                <br/>
                <p>I write to order, teach individually, and in master classes, I have recruited a group of wonderful creators who are going in the same direction as me and love their work.</p>
            </div>
        </div>
    </div>)
}
export default About;
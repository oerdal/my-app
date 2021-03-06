import React from 'react';
import Facebook from '../resources/iconmonstr-facebook.png';
import Github from '../resources/iconmonstr-github.png';
import LinkedIn from '../resources/iconmonstr-linkedin.png';
import StackOverflow from '../resources/iconmonstr-stackoverflow.png';

const styles = {
    fontSize: '1.1vw',
    lineHeight: '10px',
    color: 'black',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: window.innerHeight
}

const Contact = () => {
    return (
        <div className="container w-50" id="contact" style={styles}>
            <h1 className="text-center">Contact</h1>
            <p className="text-center">You can contact me at any of the outlets below or at my email: <a href="mailto:ozanerdal98@gmail.com">ozanerdal98@gmail.com</a></p>
            <div className="row justify-content-center">
                <a className="col text-center" target="_blank" href="https://www.facebook.com/itsozan"><img src={Facebook} alt="facebook" /></a>
                <a className="col text-center" target="_blank" href="https://www.github.com/oerdal"><img src={Github} alt="github" /></a>
                <a className="col text-center" target="_blank" href="https://www.linkedin.com/in/oerdal"><img src={LinkedIn} alt="linkedin" /></a>
                <a className="col text-center" target="_blank" href="https://stackexchange.com/users/14267045/ozan-erdal"><img src={StackOverflow} alt="stackoverflow" /></a>
            </div>
        </div>
    );
}

export default Contact;
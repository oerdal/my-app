import React from 'react';
import headshot from '../resources/ozan.jpeg';

const styles = {
    fontSize: '20px',
    lineHeight: '10px',
    color: 'black',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: window.innerHeight
}

const About = () => {
    return (
        <div className="container" id="about" style={styles}>
            <h1 className="text-center">About Me</h1>
            <p className="mx-auto text-center w-75">My name is Ozan Erdal, and I'm a third year Applied + Computational Mathematical Sciences (ACMS)
                student at the University of Washington in Seattle. I'm a part of the Scientific Computing and Numerical Algorithms program within ACMS,
                and I intend to graduate in 2020.</p>
            <p className="mx-auto text-center w-75">Hobbies of mine include: gaming, coding, mixing music, and photography.
                If I'm not in Seattle, then I'm probably driving down the sunny soCal coastline or trying out a new food spot.</p>
        </div>
    );
}

/*
<img className="" src={headshot} alt="ozan erdal" />
*/

export default About;
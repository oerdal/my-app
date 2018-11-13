import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parallax from './components/parallax';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import ocean from './resources/ocean.jpg';
import tree from './resources/tree.jpg';
import flowers from './resources/flowers.jpg';

class App extends React.Component {
    render() {
        return (
            <div>
                <Parallax background={ocean} />
                <About />
                <Parallax background={tree} />
                <Projects />
                <Parallax background={flowers} />
                <Contact />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

// style={{ backgroundImage: `url(${tree})`, backgroundSize: 'cover' }}
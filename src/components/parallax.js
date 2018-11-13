import React, {Component} from 'react';

class Parallax extends Component {
    render() {
        const styles = {
            height: window.innerHeight,
            width: window.innerWidth,
            backgroundImage: `url(${this.props.background})`,
            backgroundSize: "cover"
        }

        return <div className="parallax-container" style={styles}></div>;
    }
}

export default Parallax;
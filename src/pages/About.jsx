import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <div>
                <p>About</p>
                <Link to ='/' >Home</Link>
            </div>
        )
    }
}

export default About;

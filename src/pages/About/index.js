import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <Link to="/">
                <button className="btn btn-primary">Home</button>
            </Link>
        );
    }
}

export default About;

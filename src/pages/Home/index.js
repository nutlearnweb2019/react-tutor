import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <Link to="/About">
                <button className="btn btn-danger">About</button>
            </Link>
        );
    }
}

export default Home;

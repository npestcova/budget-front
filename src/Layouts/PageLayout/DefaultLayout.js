import React, { Component } from 'react';
import NavBar from './NavBar';

class DefaultLayout extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <div className="content">
                    content
                </div>
            </div>
        );
    }
}

export default DefaultLayout;

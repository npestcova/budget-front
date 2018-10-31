import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

    constructor() {
        super();

        this.state = {
            showProfileBar: false,
        }
    }

    toggleProfileBar() {
        console.log('inside');
        console.log(this.state);

        this.setState({
            showProfileBar: !this.state.showProfileBar,
        })
    }

    render() {

        let linksMarkup = this.props.menuItems.map((menuItem, index) => {
            let linkClass = menuItem.active ? 'nav-link active' : 'nav-link';
            return (
                <li className="nav-item" key={index}>
                    <a className={linkClass} href={menuItem.url}>{menuItem.label}</a>
                </li>
            );
        });

        let profileBar = this.state.showProfileBar ? (
            <ul className="dropdown-menu navbar-dark  bg-primary show">
                <li className="nav-item ">
                    <a className="nav-link" href="/logout">Sign out</a>
                </li>
            </ul>
        ) : '';

        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark  bg-primary ">
                <a className="navbar-brand" href="/">
                    <img className="logo-nav" src="/img/piggy-bank-w-32.png" alt="" width="30" height="30" />
                        Finance
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {linksMarkup}
                    </ul>

                    <ul className="navbar-nav navbar-right">

                        <li className="nav-item dropdown">
                            <a href="javascript:void(0)" onClick={this.toggleProfileBar.bind(this)} className="nav-link dropdown-toggle" data-toggle="dropdown">
                                npestcova@gmail.com <b className="caret"></b>
                            </a>
                            {profileBar}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
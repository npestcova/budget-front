import React, { Component } from 'react';


class NavBar extends Component {

    render() {
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
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>

                        <li className="nav-item ">
                            <a className="nav-link" href="/transaction">Transactions</a>
                        </li>

                        <li className="nav-item ">
                            <a className="nav-link" href="/cashflow">CashFlow</a>
                        </li>

                        <li className="nav-item ">
                            <a className="nav-link" href="/budget">Budget</a>
                        </li>

                        <li className="nav-item ">
                            <a className="nav-link" href="/keyword">Keywords</a>
                        </li>

                        <li className="nav-item ">
                            <a className="nav-link" href="">Import</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav navbar-right">

                        <li className="nav-item dropdown">
                            <a href="javascript:void(0)" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                npestcova@gmail.com <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu navbar-dark  bg-primary">

                                <li className="nav-item ">
                                    <a className="nav-link" href="/logout">Sign out</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
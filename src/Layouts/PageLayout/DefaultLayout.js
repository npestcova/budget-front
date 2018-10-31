import React, { Component } from 'react';
import NavBar from './NavBar';

class DefaultLayout extends Component {
    render() {
        let menuItems = [
            {label: 'Home', url: '/', active: true},
            {label: 'Transactions', url: '/transaction', active: false},
            {label: 'CashFlow', url: '/cashflow', active: false},
            {label: 'Budget', url: '/budget', active: false},
            {label: 'Keywords', url: '/keyword', active: false},
            {label: 'Import', url: '/import', active: false},
        ];

        return (
            <div>
                <NavBar menuItems={menuItems} />
                <div className="container">


                    <div className="row">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        test  ^^ margins

                    </div>

                </div>
            </div>
        );
    }
}

export default DefaultLayout;

import React, { Component } from 'react';
import TopMenu from './TopMenu';

import { BrowserRouter as Router, Route } from "react-router-dom";

import {locationRoutes} from "../../Location/Config/locationRoutes";

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
        let userName = "Natalia P."; //@TODO: load this info

        return (
            <Router>
                <div>
                    <TopMenu menuItems={menuItems} userName={userName}/>

                    <div >
                        {locationRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        );
    }
}

export default DefaultLayout;

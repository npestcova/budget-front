import React, { Component } from 'react';
import './TopMenu.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class TopMenu extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logOut() {
        alert("you are logged out");
    }

    render() {
        let linksMarkup = this.props.menuItems.map((menuItem, index) => {
            return (
                <NavItem>
                    <NavLink href={menuItem.url}>{menuItem.label}</NavLink>
                </NavItem>
            );
        });

        return (
            <div>
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/">
                        <img className="logo-nav" src="/img/piggy-bank-w-32.png" alt="" width="30" height="30" />
                        Finance
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {linksMarkup}
                        </Nav>
                        <Nav className="navbar-right navbar-dark bg-primary" navbar>
                            <UncontrolledDropdown nav inNavbar color="primary" dark >
                                <DropdownToggle nav caret>
                                    {this.props.userName}
                                </DropdownToggle>
                                <DropdownMenu right className="navbar-dark  bg-primary">
                                    <NavItem >
                                        <NavLink href="javascript:void(0)" onClick={this.logOut.bind(this)}>Sign out</NavLink>
                                    </NavItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default TopMenu;
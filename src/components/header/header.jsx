import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

export default class Header extends React.Component {

    render() {

        return (

            <header>
                <h1>
                    RESTy
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/history'>History</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to='/help'>Help</NavLink>
                        </li>
                    </ul>
                </nav>

            </header>

        );

    };

};



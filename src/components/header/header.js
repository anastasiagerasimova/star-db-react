import React from 'react';
import {Link} from 'react-router-dom';

import './header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                {/* <a href="#">StarDB</a> */}
                <Link to="/" >StarDB</Link>
            </h3>
            <ul className="d-flex">
                <li >
                    {/* <a href="#">People</a> */}
                    <Link to="/people/" >People</Link>
                </li>
                <li>
                    {/* <a href="#">Planets</a> */}
                    <Link to="/planents/" >Planets</Link>
                </li>
                <li>
                    {/* <a href="#">Starship</a> */}
                    <Link to="/starships/" >Starship</Link>
                </li>
                <li>
                    <Link to="/secret" >Secret</Link>
                </li>
                <li>
                    <Link to="/login" >Login</Link>
                </li>
            </ul>
        </div>
    )
} 

export default Header;
